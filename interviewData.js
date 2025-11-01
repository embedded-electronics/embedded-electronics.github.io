// ===== Interview Q&A Data =====
const interviewData = {

  // ===========================
  // BASIC EMBEDDED INTERVIEW Q&A - SET 1
  // ===========================
  basic_embedded_1: [
    {
      question: "What is an embedded system?",
      answer: "An embedded system is a computer designed to perform dedicated functions within a larger system."
    },
    {
      question: "What is the difference between a microprocessor and a microcontroller?",
      answer: "A microprocessor contains only the CPU, while a microcontroller has CPU, memory, and I/O peripherals integrated on one chip."
    },
    {
      question: "What is the function of GPIO?",
      answer: "GPIO (General Purpose Input/Output) pins are used to interface microcontrollers with external devices like LEDs or sensors."
    },
    {
      question: "What is firmware?",
      answer: "Firmware is software programmed into a microcontroller’s non-volatile memory that controls hardware operations."
    },
    {
      question: "What is an ISR?",
      answer: "ISR (Interrupt Service Routine) is a function that executes automatically in response to an interrupt signal."
    },
    {
      question: "Explain polling vs interrupt.",
      answer: "Polling continuously checks device status, while interrupts notify the CPU only when an event occurs."
    },
    {
      question: "What is the use of timers in embedded systems?",
      answer: "Timers are used for time delays, counting events, PWM generation, and periodic task scheduling."
    },
    {
      question: "What is the function of a watchdog timer?",
      answer: "A watchdog timer resets the system if software gets stuck or fails to respond in time."
    },
    {
      question: "What is ADC and DAC?",
      answer: "ADC converts analog signals to digital; DAC converts digital data back to analog signals."
    },
    {
      question: "What is PWM?",
      answer: "Pulse Width Modulation controls analog devices using variable duty cycle digital signals."
    },
    {
      question: "What are pull-up and pull-down resistors?",
      answer: "They ensure defined logic levels on input pins when no active signal is applied."
    },
    {
      question: "What is UART?",
      answer: "UART (Universal Asynchronous Receiver/Transmitter) is used for serial communication between devices."
    },
    {
      question: "What is SPI protocol?",
      answer: "SPI (Serial Peripheral Interface) is a full-duplex communication protocol using MISO, MOSI, SCK, and SS lines."
    },
    {
      question: "What is I2C protocol?",
      answer: "I2C uses two wires — SDA and SCL — for serial communication between multiple devices."
    },
    {
      question: "What is embedded C?",
      answer: "Embedded C is an extension of C language for programming microcontrollers."
    },
    {
      question: "What is the difference between volatile and const keywords?",
      answer: "Volatile prevents optimization on variables that can change anytime; const makes variables read-only."
    },
    {
      question: "What is bootloader?",
      answer: "A bootloader is a small program that loads the main firmware into memory after power-up."
    },
    {
      question: "What are sensors?",
      answer: "Sensors convert physical quantities like temperature or light into electrical signals."
    },
    {
      question: "What are actuators?",
      answer: "Actuators convert electrical signals into physical actions such as motion or heat."
    },
    {
      question: "What is EEPROM?",
      answer: "EEPROM (Electrically Erasable Programmable Read-Only Memory) allows data to be stored and updated even after power off."
    },
    {
      question: "What is Flash memory used for?",
      answer: "Flash memory stores firmware or programs permanently in a microcontroller."
    },
    {
      question: "What is an embedded compiler?",
      answer: "It translates embedded C code into machine code executable on a target microcontroller."
    },
    {
      question: "What is cross-compiling?",
      answer: "Cross-compiling generates code for a target device from a host computer with a different architecture."
    },
    {
      question: "What are interrupts?",
      answer: "Interrupts are signals that pause normal execution to handle urgent tasks immediately."
    },
    {
      question: "What is memory-mapped I/O?",
      answer: "It allows hardware registers to be accessed using normal memory addresses."
    },
    {
      question: "What is debouncing?",
      answer: "Debouncing removes false multiple transitions caused by mechanical switch bounces."
    },
    {
      question: "What is RTOS?",
      answer: "A Real-Time Operating System guarantees predictable task execution with timing accuracy."
    },
    {
      question: "What is clock frequency in microcontroller?",
      answer: "It defines the number of instruction cycles executed per second."
    },
    {
      question: "What is bit manipulation?",
      answer: "Bit manipulation uses bitwise operations to modify specific bits in registers or variables."
    },
    {
      question: "What is main() function used for?",
      answer: "The main() function acts as the program's starting point in embedded C."
    }
  ],

  // ===========================
  // BASIC EMBEDDED INTERVIEW Q&A - SET 2
  // ===========================
  basic_embedded_2: [
    {
      question: "What is the role of a microcontroller in an embedded system?",
      answer: "It acts as the brain that processes inputs, runs firmware, and controls outputs."
    },
    {
      question: "What is the difference between Harvard and Von Neumann architecture?",
      answer: "Harvard architecture has separate memory for code and data; Von Neumann shares one memory."
    },
    {
      question: "What is a register?",
      answer: "Registers are small, fast storage units inside the CPU used to store temporary data."
    },
    {
      question: "What is an instruction cycle?",
      answer: "It is the time required by the CPU to fetch, decode, and execute one instruction."
    },
    {
      question: "What is stack memory?",
      answer: "Stack memory stores temporary variables, return addresses, and function parameters."
    },
    {
      question: "What is heap memory?",
      answer: "Heap memory is dynamically allocated during runtime using malloc() or calloc()."
    },
    {
      question: "What is endianess?",
      answer: "Endianness defines the byte order used to represent multi-byte data — little or big endian."
    },
    {
      question: "What are timers used for in microcontrollers?",
      answer: "They generate precise time delays, count pulses, and create periodic interrupts."
    },
    {
      question: "What is a counter?",
      answer: "A counter counts external pulses or internal events using hardware timers."
    },
    {
      question: "What is pulse width?",
      answer: "It is the duration of a pulse measured in time, used in PWM signal control."
    },
    {
      question: "What is synchronous communication?",
      answer: "Data is transmitted with a shared clock signal between devices."
    },
    {
      question: "What is asynchronous communication?",
      answer: "Data is transmitted without a shared clock, usually using start and stop bits."
    },
    {
      question: "What is baud rate?",
      answer: "Baud rate specifies the number of signal changes per second in a communication channel."
    },
    {
      question: "What is DMA?",
      answer: "Direct Memory Access allows peripherals to transfer data to/from memory without CPU involvement."
    },
    {
      question: "What is stack overflow?",
      answer: "It occurs when the program uses more stack memory than allocated, leading to crashes."
    },
    {
      question: "What is static variable in C?",
      answer: "A static variable retains its value between multiple function calls."
    },
    {
      question: "What is global variable?",
      answer: "A variable accessible throughout the program from any function."
    },
    {
      question: "What is the difference between call by value and call by reference?",
      answer: "Call by value passes a copy of data, while call by reference passes its address."
    },
    {
      question: "What is ISR nesting?",
      answer: "ISR nesting allows a higher-priority interrupt to interrupt a currently running ISR."
    },
    {
      question: "What is the function of NVIC?",
      answer: "Nested Vector Interrupt Controller handles interrupt prioritization in ARM microcontrollers."
    },
    {
      question: "What is a real-time clock (RTC)?",
      answer: "RTC keeps track of time and date even when the main system is powered off."
    },
    {
      question: "What is brown-out detection?",
      answer: "It resets the microcontroller when voltage drops below a threshold to prevent malfunction."
    },
    {
      question: "What are logic levels in digital electronics?",
      answer: "Logic levels represent binary states — high (1) and low (0)."
    },
    {
      question: "What is a bus?",
      answer: "A bus is a communication pathway used to transfer data between components."
    },
    {
      question: "What is the function of clock in microcontrollers?",
      answer: "It synchronizes all internal operations of the microcontroller."
    },
    {
      question: "What are the different types of ROM?",
      answer: "PROM, EPROM, EEPROM, and Flash memory."
    },
    {
      question: "What is in-circuit programming (ICP)?",
      answer: "It allows firmware to be programmed into the microcontroller without removing it from the circuit."
    },
    {
      question: "What is memory segmentation?",
      answer: "Dividing memory into sections like code, data, and stack for better organization."
    },
    {
      question: "What is debugging?",
      answer: "Debugging is the process of identifying and fixing software or hardware issues."
    },
    {
      question: "What is cross-debugging?",
      answer: "Debugging code on a target device from a different host computer using JTAG or SWD."
    },
    {
      question: "What is a linker?",
      answer: "A linker combines compiled object files into a single executable file."
    }
  ],

  // ===========================
  // BASIC EMBEDDED INTERVIEW Q&A - SET 3
  // ===========================
  basic_embedded_3: [
    {
      question: "What is an interrupt vector table?",
      answer: "It stores addresses of ISRs corresponding to various interrupt sources."
    },
    {
      question: "What is ISR latency?",
      answer: "ISR latency is the delay between interrupt generation and the start of ISR execution."
    },
    {
      question: "What is reentrancy?",
      answer: "A reentrant function can be safely interrupted and called again before its previous execution completes."
    },
    {
      question: "What is aliasing in signals?",
      answer: "Aliasing occurs when a signal is undersampled, causing high frequencies to appear as lower frequencies."
    },
    {
      question: "What is Nyquist rate?",
      answer: "The minimum sampling rate required to avoid aliasing, equal to twice the maximum signal frequency."
    },
    {
      question: "What is quantization error?",
      answer: "It is the difference between actual analog value and its digital representation in ADC."
    },
    {
      question: "What is the use of pull-up resistor in I2C?",
      answer: "It keeps SDA and SCL lines at a defined logic level when not driven by devices."
    },
    {
      question: "What is a floating input pin?",
      answer: "A pin left unconnected that can randomly fluctuate between high and low states."
    },
    {
      question: "What is interrupt priority?",
      answer: "It determines the order of service when multiple interrupts occur simultaneously."
    },
    {
      question: "What is a task scheduler?",
      answer: "It manages task execution order and timing in a real-time system."
    },
    {
      question: "What is the function of stack pointer?",
      answer: "The stack pointer holds the address of the top of the stack."
    },
    {
      question: "What is the role of compiler optimization?",
      answer: "Optimization improves performance or reduces memory usage by rearranging instructions efficiently."
    },
    {
      question: "What is in-circuit debugger?",
      answer: "A hardware tool that allows real-time debugging on the actual microcontroller."
    },
    {
      question: "What is embedded Linux?",
      answer: "A lightweight version of Linux optimized for running on embedded devices."
    },
    {
      question: "What is cross toolchain?",
      answer: "A set of tools used to compile, assemble, and link programs for a target platform from a host system."
    },
    {
      question: "What is endian conversion?",
      answer: "It converts data between little-endian and big-endian formats."
    },
    {
      question: "What is boot sequence?",
      answer: "It is the process of initializing hardware and loading firmware after power-on reset."
    },
    {
      question: "What is code profiling?",
      answer: "It measures program performance metrics such as function execution time or memory usage."
    },
    {
      question: "What is signal conditioning?",
      answer: "It prepares sensor signals for ADC conversion through amplification or filtering."
    },
    {
      question: "What is digital filter?",
      answer: "A digital filter processes input signals to remove unwanted noise or enhance features."
    },
    {
      question: "What is PID control?",
      answer: "PID (Proportional–Integral–Derivative) control adjusts system output to achieve desired response."
    },
    {
      question: "What is a lookup table?",
      answer: "It stores precomputed values for quick retrieval instead of real-time calculation."
    },
    {
      question: "What is a communication protocol?",
      answer: "A protocol defines rules and standards for data exchange between electronic devices."
    },
    {
      question: "What is embedded bootloader update?",
      answer: "It updates firmware on the target device without replacing the hardware."
    },
    {
      question: "What is an interrupt mask?",
      answer: "It is a register used to enable or disable specific interrupts."
    },
    {
      question: "What is dual-core microcontroller?",
      answer: "It contains two processing cores that can run tasks independently or cooperatively."
    },
    {
      question: "What is instruction pipelining?",
      answer: "Pipelining allows overlapping instruction execution stages for improved CPU performance."
    },
    {
      question: "What is task starvation?",
      answer: "It occurs when a low-priority task never gets CPU time due to high-priority tasks dominating."
    },
    {
      question: "What is loop unrolling?",
      answer: "A compiler optimization technique that expands loops to reduce iteration overhead."
    },
    {
      question: "What is power-on reset?",
      answer: "It ensures the microcontroller starts in a known state after power is applied."
    },
    {
      question: "What is temperature sensor?",
      answer: "A sensor that measures ambient or object temperature and provides analog or digital output."
    }
  ]
};
