/* ===== Edit your MCQs here =====
   - Each item: { question: string, options: string[], correct: number }
   - "correct" is the index (0-based) of the right answer in "options"
*/

const quizQuestions = [
  {
    question: "Which of the following microcontroller families is based on ARM Cortex-M?",
    options: ["STM32", "PIC18F", "AT89C51", "8051"],
    correct: 0
  },
  {
    question: "Which interface is typically used for low-speed sensor communication with only two lines?",
    options: ["SPI", "I²C", "UART", "CAN"],
    correct: 1
  },
  {
    question: "ESP8266 is best described as a:",
    options: ["Motor driver", "Wi-Fi MCU", "ADC chip", "Real-time OS"],
    correct: 1
  },
  {
    question: "DHT11 primarily measures:",
    options: ["Temperature & Humidity", "Pressure & Altitude", "Voltage & Current", "Light Intensity"],
    correct: 0
  },
  {
    question: "In embedded systems, the purpose of a watchdog timer is to:",
    options: [
      "Generate PWM signals",
      "Reset the system if it hangs",
      "Control power to peripherals",
      "Measure CPU usage"
    ],
    correct: 1
  },
  {
    question: "Which memory type is non-volatile?",
    options: ["SRAM", "DRAM", "EEPROM", "Cache"],
    correct: 2
  },
  {
    question: "The Arduino Uno uses which microcontroller?",
    options: ["ATmega328P", "PIC16F877A", "STM32F103", "MSP430G2553"],
    correct: 0
  },
  {
    question: "UART communication is:",
    options: ["Synchronous", "Asynchronous", "Half-duplex only", "Parallel"],
    correct: 1
  },
  {
    question: "Which protocol is best for real-time industrial automation?",
    options: ["HTTP", "Modbus", "FTP", "SMTP"],
    correct: 1
  },
  {
    question: "In C programming, 'volatile' keyword is used for:",
    options: [
      "Declaring a constant",
      "Telling compiler a variable can change unexpectedly",
      "Optimizing memory usage",
      "Declaring static variables"
    ],
    correct: 1
  }
];
