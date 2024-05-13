from pytube import YouTube

video_url = input("Ingrese la url del video: ")
only_audio = input("¿Desea descargar solo el audio? (y/n): ")
only_audio = only_audio == 'y'
youtube_instance = YouTube(video_url)

if only_audio:
    audio_stream = youtube_instance.streams.filter(only_audio=True, mime_type="audio/mp4").order_by('abr').desc().first()
    audio_stream.download(output_path='./music')
else:
    video_stream = youtube_instance.streams.filter(only_video=True).order_by('resolution').desc().first()
    video_stream.download(output_path='./videos')

print("Descarga completada.")