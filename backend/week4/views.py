from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

import wave
import struct


HEADER_SIZE = 44

@api_view(['POST'])
def volume(request):
        try:
            # value for the volume change
            factor = float(request.data["factor"])
            audio_file = request.data["audio_file"]

            try:
                input_wav = wave.open(audio_file, 'rb')
            except:
                return Response({"error": "Could not open audio file"})

            output_file = 'output.wav'
            output_wav = wave.open(output_file, 'wb') 

            # get the params of the input WAV file
            params = input_wav.getparams()

            # write the header to the output file
            output_wav.setparams(params)
            for _ in range(HEADER_SIZE):
                output_wav.writeframes(input_wav.readframes(1))

            # read samples from input file, adjust volume, and write to the output file
            while True:
                frame = input_wav.readframes(1)
                if not frame:
                    break

                sample = struct.unpack("<i", frame)
                adjusted_sample = int(sample[0] * factor)
                output_wav.writeframes(struct.pack("<i", adjusted_sample))

            # close files
            input_wav.close()
            output_wav.close()

            return Response({"message": "Volume changed", "output_audio_file": output_file})
        
        except Exception as error:
             return Response({"error": str(error)})