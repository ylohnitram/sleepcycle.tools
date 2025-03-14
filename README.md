# SleepCycle.tools ⏰

[![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub%20Pages-blue?logo=github)](https://sleepcycle.tools)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/ylohnitram/sleepcycle.tools/pulls)

A scientific sleep calculator that helps you find optimal bedtimes based on 90-minute sleep cycles and circadian rhythm principles.

**Live Demo:** [https://sleepcycle.tools](https://sleepcycle.tools)

![Demo Screenshot](https://sleepcycle.tools/og-image.jpg)

## ✨ Features

- 🕒 Calculate bedtimes for 1-5 sleep cycles
- 🌙 Built-in 14-minute fall-asleep buffer
- 📱 Fully responsive design
- 🔒 Privacy-focused (no cookies, anonymized analytics)
- 📊 GA4 integration for aggregate usage stats

## 🚀 Quick Start

No installation needed - just visit [https://sleepcycle.tools](https://sleepcycle.tools)

For local development:
```bash
git clone https://github.com/your-username/sleepcycle.tools.git
cd sleepcycle.tools
# Open index.html in any modern browser
```

## 🛠️ How It Works

### Algorithm
```javascript
function calculateSleepPhases(wakeTime) {
  const phases = [];
  for(let cycles = 5; cycles >= 1; cycles--) {
    const bedtime = wakeTime - (cycles * 90 + 14) * 60000;
    phases.push({
      cycles,
      bedtime: formatTime(bedtime),
      duration: `${cycles * 1.5}h sleep`
    });
  }
  return phases;
```

### Tech Stack

* Frontend: Vanilla JavaScript + CSS
* Hosting: GitHub Pages
* Analytics: Google Analytics 4 (GDPR-compliant)

## 🔍 Analytics & Privacy

We collect anonymous aggregate data through GA4 to:

* Track feature usage (button clicks)
* Measure page performance
* Understand geographical distribution

### Opt-out options:

* Use [GA Opt-Out Extension](https://tools.google.com/dlpage/gaoptout)
* Block www.google-analytics.com in your ad blocker
* Use privacy-focused browsers like Brave or Firefox Focus

## 🤝 Contributing

We welcome contributions! Please follow these steps:

* Fork the repository
* Create a feature branch (git checkout -b feature/amazing-feature)
* Commit changes (git commit -m 'Add amazing feature')
* Push to branch (git push origin feature/amazing-feature)
* Open a Pull Request

### Suggested Improvements

* Add dark mode toggle
* Create progressive web app (PWA)
* Implement timezone detection
* Add nap calculator feature

## 📜 Code of Conduct

Please review our Code of Conduct before participating. We prioritize:

* Respectful communication
* Inclusive environment
* Constructive criticism

## 📄 License

This project is licensed under the MIT License - see [LICENSE](https://github.com/ylohnitram/sleepcycle.tools/LICENSE) for details.

## 🙏 Acknowledgments

* Sleep cycle research from Harvard Medical School
* Initial concept inspired by Sleepyti.me
* Community feedback from Reddit's r/sleep

## Need Help?

Open an [issue](https://github.com/ylohnitram/sleepcycle.tools/issues)
