const responseText = `ඔව්, i20 Ultra 3 Max Smart Watch හි ඡායාරූප පහතින් බලන්න 📸\n\n<IMAGE_URL>https://storage.buildstart.io/biz-8cee6a55-15c4-46b9-8242-42297f30b71b/products/5da9b258-2246-4370-9921-4a5f8f735fa8.jpeg, https://storage.buildstart.io/biz-8cee6a55-15c4-46b9-8242-42297f30b71b/products/c6477f18-2db4-4748-864a-a037e755c4c1.jpeg</IMAGE_URL>`;

const imageUrls = [];
const imageTagMatches = [...responseText.matchAll(/<IMAGE_URL>([\s\S]*?)<\/IMAGE_URL>/g)];
for (const match of imageTagMatches) {
  if (match[1]) {
    match[1].split(',').forEach(url => {
      const trimmed = url.trim();
      if (trimmed && !imageUrls.includes(trimmed)) {
        imageUrls.push(trimmed);
      }
    });
  }
}
console.log(imageUrls);
