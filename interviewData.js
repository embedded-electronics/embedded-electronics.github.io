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
  ],
  // ===== BASIC C PROGRAMMING SET 1 =====
  basic_cprogramming_1: [
    { question: "What is C programming language?", answer: "C is a structured, procedural programming language developed by Dennis Ritchie for developing operating systems, compilers, and embedded applications." },
    { question: "What are the features of C language?", answer: "C is fast, portable, extensible, supports low-level memory access, and provides rich libraries for system-level programming." },
    { question: "Who developed C language?", answer: "Dennis Ritchie developed C at Bell Labs in 1972." },
    { question: "What is the difference between compiler and interpreter?", answer: "A compiler translates the entire code at once, while an interpreter executes code line by line." },
    { question: "What is the use of header files?", answer: "Header files contain function declarations and macros that can be reused in multiple programs." },
    { question: "What are keywords in C?", answer: "Keywords are reserved words in C such as int, float, char, if, else, while, for, etc." },
    { question: "What is a variable?", answer: "A variable is a named memory location used to store data." },
    { question: "What are data types in C?", answer: "Data types define the type of data a variable can store such as int, char, float, double, etc." },
    { question: "What is the use of sizeof() operator?", answer: "It returns the size of a data type or variable in bytes." },
    { question: "What is the difference between = and ==?", answer: "= assigns a value to a variable, while == checks for equality between two values." },
    { question: "What is the use of printf() function?", answer: "printf() is used to display output on the screen." },
    { question: "What is scanf() used for?", answer: "scanf() is used to take user input from the keyboard." },
    { question: "What are operators in C?", answer: "Operators are symbols used to perform operations, like +, -, *, /, %, and relational or logical operators." },
    { question: "What is a conditional statement?", answer: "A statement used to make decisions, like if, else if, and switch." },
    { question: "What is a loop in C?", answer: "Loops are used to execute a block of code repeatedly (for, while, do-while)." },
    { question: "What is an infinite loop?", answer: "A loop that never terminates because its condition always evaluates to true." },
    { question: "What is a nested loop?", answer: "A loop inside another loop is called a nested loop." },
    { question: "What is the use of break statement?", answer: "It is used to exit from a loop or switch statement immediately." },
    { question: "What is continue statement?", answer: "It skips the rest of the code in the current iteration and jumps to the next iteration." },
    { question: "What is the use of return statement?", answer: "It terminates a function and returns control to the calling function." },
    { question: "What are arrays?", answer: "Arrays are collections of elements of the same type stored in contiguous memory locations." },
    { question: "What is a string?", answer: "A string is an array of characters terminated by a null character '\\0'." },
    { question: "What is a pointer?", answer: "A pointer is a variable that stores the address of another variable." },
    { question: "What is NULL pointer?", answer: "A pointer that points to nothing or 0 address in memory." },
    { question: "What is a function?", answer: "A function is a block of reusable code that performs a specific task." },
    { question: "What is recursion?", answer: "Recursion occurs when a function calls itself." },
    { question: "What is call by value?", answer: "In call by value, a copy of the variable is passed to the function." },
    { question: "What is call by reference?", answer: "In call by reference, the address of a variable is passed to the function." },
    { question: "What is the use of static keyword?", answer: "It retains the value of a variable between multiple function calls." },
    { question: "What is the main() function?", answer: "main() is the entry point of every C program from where execution begins." }
  ],

  // ===== BASIC C PROGRAMMING SET 2 =====
  basic_cprogramming_2: [
    { question: "What is the difference between local and global variables?", answer: "Local variables are declared inside a function; global variables are declared outside and accessible by all functions." },
    { question: "What is the use of const keyword?", answer: "It makes a variable's value constant and prevents modification after initialization." },
    { question: "What is the volatile keyword used for?", answer: "It tells the compiler that a variable's value may change unexpectedly, often used for hardware registers." },
    { question: "What is storage class in C?", answer: "Storage classes define the scope, lifetime, and visibility of variables — auto, static, extern, register." },
    { question: "What is extern keyword?", answer: "It declares a global variable that can be used across multiple files." },
    { question: "What is a macro in C?", answer: "Macros are code snippets defined using #define, replaced by their value before compilation." },
    { question: "What are structures in C?", answer: "Structures allow grouping of variables of different data types under one name." },
    { question: "What is union in C?", answer: "A union stores different data types in the same memory location." },
    { question: "Difference between structure and union?", answer: "In structure, each member has its own storage; in union, all members share the same memory." },
    { question: "What is typedef used for?", answer: "typedef gives an alternate name to existing data types." },
    { question: "What is an enum?", answer: "enum is a user-defined data type that assigns names to integer constants." },
    { question: "What is dynamic memory allocation?", answer: "Allocating memory during runtime using malloc(), calloc(), realloc(), and free()." },
    { question: "What is malloc() function?", answer: "malloc() allocates memory dynamically and returns a pointer to it." },
    { question: "What is calloc() function?", answer: "calloc() allocates memory for an array and initializes all bytes to zero." },
    { question: "What is realloc() function?", answer: "realloc() resizes previously allocated memory." },
    { question: "What is free() used for?", answer: "free() deallocates the memory previously allocated dynamically." },
    { question: "What are dangling pointers?", answer: "Pointers that reference freed or invalid memory addresses." },
    { question: "What is segmentation fault?", answer: "It occurs when a program tries to access restricted memory." },
    { question: "What is function pointer?", answer: "A function pointer stores the address of a function and allows dynamic function calls." },
    { question: "What are command-line arguments?", answer: "They are arguments passed to main() during program execution." },
    { question: "What is recursion limit?", answer: "It’s the maximum number of times a function can call itself before stack overflow." },
    { question: "What is inline function?", answer: "An inline function suggests the compiler to insert code directly instead of calling the function." },
    { question: "What is bitwise operator?", answer: "Operators that manipulate bits directly, such as &, |, ^, <<, >>." },
    { question: "What is the use of shift operators?", answer: "Shift operators move bits left or right, useful for bit-level operations." },
    { question: "What are logical operators?", answer: "Logical operators (&&, ||, !) are used to combine multiple conditions." },
    { question: "What is conditional operator?", answer: "Also known as ternary operator (?:), it acts as a shorthand for if-else." },
    { question: "What is modular programming?", answer: "Breaking a large program into smaller reusable modules or functions." },
    { question: "What is difference between macro and function?", answer: "Macros are expanded at compile time, while functions are executed at runtime." },
    { question: "What is #include directive?", answer: "It is used to include header files in a C program." },
    { question: "What is the use of preprocessor?", answer: "It processes directives before actual compilation starts." }
  ],

  // ===== BASIC C PROGRAMMING SET 3 =====
  basic_cprogramming_3: [
    { question: "What is a file in C?", answer: "A file is a collection of data stored on disk and accessed using file handling functions." },
    { question: "How do you open a file in C?", answer: "Using fopen() with appropriate mode like 'r', 'w', 'a', etc." },
    { question: "What is fclose() used for?", answer: "It closes a file opened using fopen() and releases resources." },
    { question: "What is fprintf() used for?", answer: "It writes formatted data to a file." },
    { question: "What is fscanf() used for?", answer: "It reads formatted data from a file." },
    { question: "What is EOF?", answer: "EOF stands for End of File, indicating no more data to read." },
    { question: "What is stderr?", answer: "stderr is the standard error stream used for error messages." },
    { question: "What is stdin and stdout?", answer: "stdin is standard input, stdout is standard output." },
    { question: "What is macro expansion?", answer: "Replacing macro names with their values during preprocessing." },
    { question: "What is difference between #include <file> and #include \"file\"?", answer: "<file> searches system directories, while \"file\" searches current directory first." },
    { question: "What is the volatile keyword?", answer: "It prevents compiler optimization of variables that can change unexpectedly." },
    { question: "What is difference between exit() and return?", answer: "return exits a function, while exit() terminates the whole program." },
    { question: "What is pointer to pointer?", answer: "It is a variable that stores the address of another pointer." },
    { question: "What is memory leak?", answer: "Memory that is allocated but never freed, causing resource wastage." },
    { question: "What is segmentation in memory?", answer: "Dividing memory into logical segments like stack, heap, code, and data." },
    { question: "What is stack overflow?", answer: "It occurs when the call stack exceeds its limit, often due to deep recursion." },
    { question: "What is debugging?", answer: "The process of finding and fixing logical or runtime errors." },
    { question: "What is assert() function?", answer: "It checks runtime conditions and helps during debugging." },
    { question: "What are nested structures?", answer: "Structures declared inside another structure." },
    { question: "What is bit field?", answer: "A way to assign specific number of bits to structure members." },
    { question: "What are tokens in C?", answer: "Tokens are the smallest building blocks: keywords, identifiers, literals, and operators." },
    { question: "What is operator precedence?", answer: "It defines the order in which operators are evaluated." },
    { question: "What is associativity?", answer: "It determines the direction (left-to-right or right-to-left) of operator evaluation." },
    { question: "What is the purpose of main() returning 0?", answer: "It indicates successful execution to the operating system." },
    { question: "What is type casting?", answer: "Converting one data type into another manually or automatically." },
    { question: "What is the difference between while and do-while loop?", answer: "while checks condition first; do-while executes at least once." },
    { question: "What is switch statement?", answer: "A control statement used for multi-way branching." },
    { question: "What is default case in switch?", answer: "It executes when none of the case labels match." },
    { question: "What is infinite recursion?", answer: "When a recursive function never reaches a base condition, causing stack overflow." },
    { question: "What is modular header file?", answer: "Custom header files created by users to include reusable functions and macros." }
  ]
};
};
