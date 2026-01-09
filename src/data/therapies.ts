export interface Therapy {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const therapies: Therapy[] = [
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    description: "Hands-on techniques including joint mobilization, soft tissue massage, and manipulation to reduce pain, improve mobility, and restore normal joint function.",
    icon: "hands"
  },
  {
    id: "interferential-therapy",
    title: "Interferential Therapy",
    description: "Two medium-frequency electrical currents intersect to produce a low-frequency therapeutic effect, reducing pain, improving circulation, and promoting healing.",
    icon: "zap"
  },
  {
    id: "tens-therapy",
    title: "TENS Therapy",
    description: "Transcutaneous Electrical Nerve Stimulation uses mild electrical pulses to block pain signals and stimulate endorphin release for natural pain relief.",
    icon: "activity"
  },
  {
    id: "ultrasound-therapy",
    title: "Ultrasound Therapy",
    description: "High-frequency sound waves penetrate deep into tissues to reduce inflammation, accelerate healing, and relieve pain in muscles, tendons, and joints.",
    icon: "radio"
  },
  {
    id: "exercise-therapy",
    title: "Exercise Therapy",
    description: "Personalized exercise programs designed to improve strength, flexibility, balance, and endurance based on your specific condition and recovery goals.",
    icon: "dumbbell"
  },
  {
    id: "consultation",
    title: "Consultation & Assessment",
    description: "Comprehensive evaluation of your condition including physical examination, movement analysis, and development of a customized treatment plan.",
    icon: "clipboard"
  }
];
