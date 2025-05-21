function convertVideo() {
  const videoInput = document.getElementById('videoInput');
  const outputText = document.getElementById('outputText');

  if (!videoInput.files.length) {
    alert('Please upload a video file');
    return;
  }

  // Mock output (in real app, backend AI model needed)
  outputText.innerText = "Translated Text: Hello, how are you?";
}
const translations = {
  en: {
    heading: "Learn and Convert Sign Language",
    description: "Convert Sign Language to English/Gujarati and Learn Easily",
    convertBtn: "Try Converter"
  },
  gu: {
    heading: "સાંકેતિક ભાષા શીખો અને રૂપાંતર કરો",
    description: "સાંકેતિક ભાષાને અંગ્રેજી/ગુજરાતીમાં રૂપાંતરિત કરો અને સરળતાથી શીખો",
    convertBtn: "કન્વર્ટર અજમાવો"
  }
};

function switchLanguage() {
  const lang = document.getElementById("languageSelect").value;
  document.querySelector(".hero h2").innerText = translations[lang].heading;
  document.querySelector(".hero p").innerText = translations[lang].description;
  document.querySelector(".hero a").innerText = translations[lang].convertBtn;
}

