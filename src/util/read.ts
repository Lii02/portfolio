async function readText(src: string, setTextFn: (value: string) => void) {
  try {
    const res = await fetch(src);
    const text = await res.text();
    setTextFn(text);
  } catch (error) {
    console.error(`Error loading description file: ${src} Error: ${error}`);
  }
}

export { readText };