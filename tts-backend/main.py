from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import edge_tts
import io


app = FastAPI(
    title="Embedded Electronics TTS API",
    description="Microsoft Edge TTS API",
    version="1.0.0"
)


# --------------------------------------------------
# CORS
# --------------------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://embedded-electronics.github.io"
    ],
    allow_credentials=False,
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)


# --------------------------------------------------
# Request Model
# --------------------------------------------------

class TTSRequest(BaseModel):

    text: str

    voice: str = "en-IN-PrabhatNeural"

    rate: str = "+0%"

    pitch: str = "+0Hz"

    volume: str = "+0%"


# --------------------------------------------------
# Health Check
# --------------------------------------------------

@app.get("/")
async def root():

    return {
        "status": "online",
        "service": "Embedded Electronics TTS API",
        "tts": "Microsoft Edge TTS"
    }


# --------------------------------------------------
# Generate MP3
# --------------------------------------------------

@app.post("/generate")
async def generate_tts(request: TTSRequest):

    if not request.text.strip():

        raise HTTPException(
            status_code=400,
            detail="Text cannot be empty."
        )


    # Allowed voices
    allowed_voices = [

        "en-IN-PrabhatNeural",

        "en-IN-NeerjaNeural"

    ]


    if request.voice not in allowed_voices:

        raise HTTPException(
            status_code=400,
            detail="Invalid voice."
        )


    try:

        communicate = edge_tts.Communicate(
            text=request.text,
            voice=request.voice,
            rate=request.rate,
            volume=request.volume,
            pitch=request.pitch
        )


        audio_buffer = io.BytesIO()


        async for chunk in communicate.stream():

            if chunk["type"] == "audio":

                audio_buffer.write(
                    chunk["data"]
                )


        audio_buffer.seek(0)


        return StreamingResponse(

            audio_buffer,

            media_type="audio/mpeg",

            headers={
                "Content-Disposition":
                'attachment; filename="embedded-electronics-tts.mp3"'
            }

        )


    except Exception as e:

        raise HTTPException(

            status_code=500,

            detail=f"TTS generation failed: {str(e)}"

        )
