// interviewData.js
const interviewData = {
  basic_embedded_1: [
    {
      question: "What is the difference between microprocessor and microcontroller?",
      answer: "A microprocessor is CPU-based and requires external peripherals, while a microcontroller has CPU, memory, and I/O on a single chip."
    },
    {
      question: "What is an ISR (Interrupt Service Routine)?",
      answer: "An ISR is a special function executed when an interrupt occurs, handling urgent tasks before returning to normal flow."
    },
    {
      question: "Explain polling vs interrupts.",
      answer: "Polling checks device status continuously, wasting CPU time. Interrupts signal the CPU only when needed, improving efficiency."
    },
    // ... up to Q50
  ],

  medium_embedded_1: [
    {
      question: "What is the difference between cooperative and preemptive multitasking?",
      answer: "In cooperative multitasking, tasks voluntarily yield control; in preemptive multitasking, the scheduler decides when to switch tasks."
    },
    // more Q&A pairs
  ],

  advanced_embedded_1: [
    {
      question: "Explain memory protection and its role in embedded OS.",
      answer: "Memory protection prevents one process from accessing another's memory space, improving security and stability."
    },
    // more advanced Q&As
  ]
};
