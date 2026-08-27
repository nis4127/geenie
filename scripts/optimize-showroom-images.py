from pathlib import Path
from PIL import Image

root = Path('client/public/assets/showroom')
for source in sorted(root.iterdir()):
    if source.suffix.lower() not in {'.jpg', '.jpeg', '.png'}:
        continue
    destination = source.with_suffix('.webp')
    image = Image.open(source)
    if image.mode in {'RGBA', 'LA'} or 'transparency' in image.info:
        image.save(destination, 'WEBP', quality=88, method=6)
    else:
        image.convert('RGB').save(destination, 'WEBP', quality=84, method=6)
    print(f'{source.name} -> {destination.name} ({source.stat().st_size} -> {destination.stat().st_size} bytes)')
