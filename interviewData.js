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
  ],
  // ===== Basic C++ Programming — Set 1 =====
  basic_cpp_programming_1: [
    {
      question: "What is the difference between C and C++?",
      answer: "C is a procedural programming language, while C++ supports both procedural and object-oriented programming paradigms."
    },
    {
      question: "What are classes and objects in C++?",
      answer: "A class is a user-defined data type that defines properties and behaviors, while an object is an instance of a class."
    },
    {
      question: "What is encapsulation in C++?",
      answer: "Encapsulation is the bundling of data and functions that operate on that data within a single unit, i.e., a class."
    },
    {
      question: "What is inheritance in C++?",
      answer: "Inheritance allows one class to acquire the properties and behaviors of another class, promoting code reusability."
    },
    {
      question: "What is polymorphism?",
      answer: "Polymorphism allows one interface to be used for different data types or functions — achieved through function overloading and overriding."
    },
    {
      question: "What is function overloading?",
      answer: "Function overloading allows multiple functions with the same name but different parameters."
    },
    {
      question: "What is operator overloading?",
      answer: "Operator overloading allows defining custom behavior for operators (like +, -, =) for user-defined types."
    },
    {
      question: "What is a constructor?",
      answer: "A constructor is a special function automatically called when an object is created, used to initialize data members."
    },
    {
      question: "What is a destructor?",
      answer: "A destructor is a special function that cleans up resources when an object goes out of scope or is deleted."
    },
    {
      question: "What are access specifiers in C++?",
      answer: "Access specifiers control access to class members — public, private, and protected."
    },
    {
      question: "What is the difference between struct and class in C++?",
      answer: "In C++, struct members are public by default, while class members are private by default."
    },
    {
      question: "What is the use of the 'this' pointer?",
      answer: "The 'this' pointer refers to the current object of the class within its member functions."
    },
    {
      question: "What is a virtual function?",
      answer: "A virtual function allows derived classes to override a function in a base class to achieve runtime polymorphism."
    },
    {
      question: "What is pure virtual function?",
      answer: "A pure virtual function is declared with '= 0' in the base class and must be overridden in the derived class."
    },
    {
      question: "What is an abstract class?",
      answer: "An abstract class is a class that cannot be instantiated directly and contains at least one pure virtual function."
    },
    {
      question: "What is multiple inheritance?",
      answer: "Multiple inheritance allows a class to inherit from more than one base class."
    },
    {
      question: "What are friend functions?",
      answer: "Friend functions are non-member functions that have access to the private and protected members of a class."
    },
    {
      question: "What is a copy constructor?",
      answer: "A copy constructor initializes an object using another object of the same class."
    },
    {
      question: "What is function overriding?",
      answer: "Function overriding allows a derived class to redefine a base class function with the same signature."
    },
    {
      question: "What is the use of 'namespace' in C++?",
      answer: "Namespaces prevent name conflicts by organizing code into logical groups."
    },
    {
      question: "What is STL in C++?",
      answer: "STL (Standard Template Library) provides reusable templates for data structures and algorithms like vector, list, map, etc."
    },
    {
      question: "What is a template in C++?",
      answer: "Templates allow creating generic functions or classes that can work with any data type."
    },
    {
      question: "What is the difference between deep copy and shallow copy?",
      answer: "Shallow copy copies only object references; deep copy duplicates the actual objects."
    },
    {
      question: "What is dynamic memory allocation?",
      answer: "Dynamic memory allocation allows allocating memory at runtime using 'new' and freeing with 'delete'."
    },
    {
      question: "What is the difference between malloc() and new?",
      answer: "malloc() is a C function that allocates memory; new is a C++ operator that also calls constructors."
    },
    {
      question: "What are inline functions?",
      answer: "Inline functions reduce function call overhead by inserting code directly where the function is called."
    },
    {
      question: "What is exception handling?",
      answer: "Exception handling in C++ uses try, catch, and throw blocks to manage runtime errors gracefully."
    },
    {
      question: "What is the use of 'const' keyword?",
      answer: "'const' is used to define immutable variables or protect data from modification."
    },
    {
      question: "What is a reference variable?",
      answer: "A reference variable acts as an alias for another variable."
    },
    {
      question: "What is the use of scope resolution operator (::)?",
      answer: "It is used to define or access class members and global variables outside their scope."
    }
  ],

  // ===== Basic C++ Programming — Set 2 =====
  basic_cpp_programming_2: [
    {
      question: "What are the types of polymorphism in C++?",
      answer: "Compile-time polymorphism (function overloading) and runtime polymorphism (virtual functions)."
    },
    {
      question: "What is function hiding?",
      answer: "If a derived class function has the same name as a base class function, it hides the base function, even if parameters differ."
    },
    {
      question: "What is an inline constructor?",
      answer: "A constructor defined inside the class declaration is implicitly inline."
    },
    {
      question: "What is a virtual destructor?",
      answer: "A virtual destructor ensures derived class destructors are called when deleting an object via a base class pointer."
    },
    {
      question: "What is RTTI in C++?",
      answer: "RTTI (Run-Time Type Information) provides information about an object’s type during runtime using typeid and dynamic_cast."
    },
    {
      question: "What are static members?",
      answer: "Static members are shared across all objects of a class, having a single memory instance."
    },
    {
      question: "What is a pointer to an object?",
      answer: "A pointer to an object allows direct access to members using the arrow operator (->)."
    },
    {
      question: "What is the difference between reference and pointer?",
      answer: "A reference must be initialized and cannot be null, while a pointer can change and be null."
    },
    {
      question: "What is type casting in C++?",
      answer: "Type casting converts a variable from one data type to another using static_cast, dynamic_cast, etc."
    },
    {
      question: "What is function template specialization?",
      answer: "It allows customizing template behavior for specific data types."
    },
    {
      question: "What are smart pointers?",
      answer: "Smart pointers (unique_ptr, shared_ptr) automatically manage memory to prevent leaks."
    },
    {
      question: "What is an iterator in STL?",
      answer: "Iterators are objects used to traverse containers like vector, list, and map."
    },
    {
      question: "What is std::vector?",
      answer: "std::vector is a dynamic array that can resize itself automatically."
    },
    {
      question: "What is the difference between map and unordered_map?",
      answer: "map stores keys in sorted order, while unordered_map uses hashing for faster access."
    },
    {
      question: "What is a lambda function?",
      answer: "Lambda functions are anonymous inline functions introduced in C++11."
    },
    {
      question: "What are function pointers?",
      answer: "Function pointers store the address of a function and can be used to call it dynamically."
    },
    {
      question: "What is the difference between overloading and overriding?",
      answer: "Overloading happens within a class (same name, different parameters), overriding occurs across inheritance hierarchy."
    },
    {
      question: "What is the use of 'mutable' keyword?",
      answer: "'mutable' allows modification of a class member even in const objects."
    },
    {
      question: "What is std::string in C++?",
      answer: "std::string is a class that represents a sequence of characters and provides built-in functions for string manipulation."
    },
    {
      question: "What is std::array?",
      answer: "std::array is a fixed-size container available in C++11."
    },
    {
      question: "What is the difference between new/delete and malloc/free?",
      answer: "new/delete call constructors and destructors, while malloc/free only allocate and deallocate raw memory."
    },
    {
      question: "What is an exception specification?",
      answer: "It specifies what exceptions a function might throw; however, it's deprecated in modern C++."
    },
    {
      question: "What is an initializer list in C++?",
      answer: "An initializer list is used to initialize class members before the constructor body executes."
    },
    {
      question: "What is move semantics?",
      answer: "Move semantics optimize performance by transferring resources instead of copying them."
    },
    {
      question: "What are enum classes?",
      answer: "Enum classes provide strongly-typed enumerations introduced in C++11."
    },
    {
      question: "What is std::unique_ptr?",
      answer: "unique_ptr represents exclusive ownership of a dynamically allocated object."
    },
    {
      question: "What is std::shared_ptr?",
      answer: "shared_ptr allows multiple pointers to share ownership of a dynamically allocated object."
    },
    {
      question: "What is the difference between stack and heap memory?",
      answer: "Stack memory is automatically managed, while heap memory requires manual allocation and deallocation."
    },
    {
      question: "What are references to const?",
      answer: "They prevent modification of the object being referenced."
    },
    {
      question: "What is the purpose of 'explicit' keyword?",
      answer: "It prevents implicit conversions during object initialization."
    },
    {
      question: "What is std::pair and std::tuple?",
      answer: "They are STL containers used to store multiple heterogeneous values together."
    }
  ],

  // ===== Basic C++ Programming — Set 3 =====
  basic_cpp_programming_3: [
    {
      question: "What is an abstract base class?",
      answer: "An abstract base class serves as a parent class and cannot be instantiated directly."
    },
    {
      question: "What are pure virtual destructors?",
      answer: "They are virtual destructors declared as pure virtual but must still have a definition."
    },
    {
      question: "What are functors in C++?",
      answer: "Functors are objects that behave like functions using operator()."
    },
    {
      question: "What are macros in C++?",
      answer: "Macros are preprocessor directives defined using #define for code substitution before compilation."
    },
    {
      question: "What is the difference between compile-time and runtime polymorphism?",
      answer: "Compile-time polymorphism is achieved through function overloading, while runtime uses virtual functions."
    },
    {
      question: "What is the difference between composition and inheritance?",
      answer: "Composition involves including objects as class members, while inheritance extends class behavior."
    },
    {
      question: "What are the benefits of using OOP in C++?",
      answer: "OOP promotes modularity, reusability, and maintainability of code."
    },
    {
      question: "What is the 'override' keyword in C++11?",
      answer: "It explicitly marks a function as overriding a virtual function from the base class."
    },
    {
      question: "What is the 'final' keyword in C++?",
      answer: "It prevents further overriding of a virtual function or inheritance from a class."
    },
    {
      question: "What is multiple inheritance ambiguity?",
      answer: "When two base classes have functions with the same name, it creates ambiguity in the derived class."
    },
    {
      question: "What is the diamond problem?",
      answer: "It occurs in multiple inheritance when two parent classes inherit from the same grandparent class."
    },
    {
      question: "What is virtual inheritance?",
      answer: "Virtual inheritance solves the diamond problem by ensuring only one instance of the grandparent class is inherited."
    },
    {
      question: "What is 'auto' keyword in C++?",
      answer: "It automatically deduces the data type of a variable during compilation."
    },
    {
      question: "What is 'decltype' keyword?",
      answer: "decltype determines the type of an expression at compile-time."
    },
    {
      question: "What are move constructors?",
      answer: "Move constructors transfer ownership of resources from one object to another, avoiding deep copies."
    },
    {
      question: "What is std::forward?",
      answer: "std::forward is used for perfect forwarding of arguments in templates."
    },
    {
      question: "What are constexpr functions?",
      answer: "constexpr functions are evaluated at compile-time for better performance."
    },
    {
      question: "What is the difference between emplace() and insert() in STL?",
      answer: "emplace() constructs objects in-place; insert() copies or moves existing objects."
    },
    {
      question: "What is std::deque?",
      answer: "std::deque (double-ended queue) allows insertion and deletion at both ends efficiently."
    },
    {
      question: "What is std::set?",
      answer: "std::set is an associative container that stores unique elements in sorted order."
    },
    {
      question: "What is std::multiset?",
      answer: "std::multiset allows duplicate elements, unlike std::set."
    },
    {
      question: "What is std::map?",
      answer: "std::map stores key-value pairs in sorted order using balanced trees."
    },
    {
      question: "What is std::unordered_map?",
      answer: "unordered_map stores key-value pairs using hash tables for faster lookup."
    },
    {
      question: "What are memory leaks in C++?",
      answer: "Memory leaks occur when dynamically allocated memory is not freed using delete."
    },
    {
      question: "What are dangling pointers?",
      answer: "Dangling pointers point to memory locations that have been freed or are invalid."
    },
    {
      question: "What are static_cast and dynamic_cast?",
      answer: "static_cast performs compile-time conversion, while dynamic_cast checks types at runtime."
    },
    {
      question: "What is RAII?",
      answer: "RAII (Resource Acquisition Is Initialization) ties resource management to object lifetime to prevent leaks."
    },
    {
      question: "What is a singleton class?",
      answer: "A singleton class ensures only one instance of a class exists during program execution."
    },
    {
      question: "What are design patterns in C++?",
      answer: "Design patterns are reusable solutions to common software design problems."
    },
    {
      question: "What is the use of 'volatile' keyword?",
      answer: "'volatile' tells the compiler not to optimize a variable because it can change unexpectedly."
    },
    {
      question: "What is the use of 'static' keyword in C++?",
      answer: "'static' defines class variables shared among all instances or limits function scope to the current file."
    },
    {
      question: "What are forward declarations?",
      answer: "Forward declarations declare a class or function before defining it, helping resolve dependencies."
    }
  ],
  // ===== BASIC DATA STRUCTURE SET 1 =====
  basic_data_structure_1: [
    {
      question: "What is a data structure?",
      answer: "A data structure is a way to organize and store data efficiently for performing operations like insertion, deletion, searching, and sorting."
    },
    {
      question: "What are the types of data structures?",
      answer: "Data structures are divided into linear (arrays, linked lists, stacks, queues) and non-linear (trees, graphs, heaps) types."
    },
    {
      question: "What is an array?",
      answer: "An array is a collection of elements of the same data type stored in contiguous memory locations."
    },
    {
      question: "What are the advantages of arrays?",
      answer: "Arrays allow random access, efficient traversal, and easy sorting/searching operations."
    },
    {
      question: "What are the disadvantages of arrays?",
      answer: "Arrays have fixed size and inserting/deleting elements is costly as it requires shifting elements."
    },
    {
      question: "What is a linked list?",
      answer: "A linked list is a linear data structure where elements (nodes) are connected using pointers."
    },
    {
      question: "What are the types of linked lists?",
      answer: "The main types are singly linked list, doubly linked list, and circular linked list."
    },
    {
      question: "What is the difference between array and linked list?",
      answer: "Arrays have fixed size and contiguous memory; linked lists are dynamic and use scattered memory."
    },
    {
      question: "What is a stack?",
      answer: "A stack is a linear data structure that follows LIFO (Last In, First Out) order."
    },
    {
      question: "What are the basic stack operations?",
      answer: "The main operations are push (insert), pop (delete), and peek (top element access)."
    },
    {
      question: "What is a queue?",
      answer: "A queue is a linear data structure that follows FIFO (First In, First Out) order."
    },
    {
      question: "What are the operations on a queue?",
      answer: "The main operations are enqueue (insert) and dequeue (delete)."
    },
    {
      question: "What is a circular queue?",
      answer: "A circular queue connects the last position back to the first, making use of all available space."
    },
    {
      question: "What is a priority queue?",
      answer: "A priority queue is a special queue where each element has a priority, and higher priority elements are served first."
    },
    {
      question: "What is a doubly linked list?",
      answer: "A doubly linked list is a list where each node has pointers to both the next and previous nodes."
    },
    {
      question: "What is a circular linked list?",
      answer: "In a circular linked list, the last node points back to the first node forming a circle."
    },
    {
      question: "What is the difference between stack and queue?",
      answer: "Stack uses LIFO order while queue uses FIFO order."
    },
    {
      question: "What is a hash table?",
      answer: "A hash table stores data in key-value pairs using a hash function to compute an index for each key."
    },
    {
      question: "What is a hash collision?",
      answer: "A collision occurs when two different keys produce the same hash index."
    },
    {
      question: "How are collisions handled in hashing?",
      answer: "Collisions can be handled using chaining, linear probing, or double hashing."
    },
    {
      question: "What is the difference between linear and non-linear data structures?",
      answer: "In linear structures, elements are arranged sequentially; in non-linear structures, elements are hierarchical (like trees)."
    },
    {
      question: "What is Big O notation?",
      answer: "Big O notation represents the time or space complexity of an algorithm in the worst case."
    },
    {
      question: "What is time complexity?",
      answer: "Time complexity measures the amount of time an algorithm takes based on input size."
    },
    {
      question: "What is space complexity?",
      answer: "Space complexity measures the amount of memory used by an algorithm."
    },
    {
      question: "What is recursion?",
      answer: "Recursion is a technique where a function calls itself until a base condition is met."
    },
    {
      question: "What are advantages of recursion?",
      answer: "Recursion simplifies problems like factorial, Fibonacci, and tree traversal."
    },
    {
      question: "What are disadvantages of recursion?",
      answer: "Recursion consumes more memory and may lead to stack overflow if not handled properly."
    },
    {
      question: "What is linear search?",
      answer: "Linear search checks each element sequentially until the target is found."
    },
    {
      question: "What is binary search?",
      answer: "Binary search divides the array into halves and eliminates one half on each iteration; works only on sorted arrays."
    },
    {
      question: "What is sorting?",
      answer: "Sorting arranges data in a specific order, such as ascending or descending."
    }
  ],

  // ===== BASIC DATA STRUCTURE SET 2 =====
  basic_data_structure_2: [
    {
      question: "What are common sorting algorithms?",
      answer: "Common algorithms include Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort."
    },
    {
      question: "What is Bubble Sort?",
      answer: "Bubble Sort repeatedly swaps adjacent elements if they are in the wrong order."
    },
    {
      question: "What is Insertion Sort?",
      answer: "Insertion Sort builds the final sorted array by inserting each element in its correct position."
    },
    {
      question: "What is Selection Sort?",
      answer: "Selection Sort repeatedly selects the smallest element and places it in the correct position."
    },
    {
      question: "What is Merge Sort?",
      answer: "Merge Sort divides the array into halves, sorts each, and merges them back together."
    },
    {
      question: "What is Quick Sort?",
      answer: "Quick Sort partitions the array using a pivot element and sorts subarrays recursively."
    },
    {
      question: "What is Heap Sort?",
      answer: "Heap Sort builds a heap and repeatedly extracts the maximum (or minimum) element to sort data."
    },
    {
      question: "What is a binary tree?",
      answer: "A binary tree is a hierarchical data structure where each node has at most two children — left and right."
    },
    {
      question: "What is a binary search tree (BST)?",
      answer: "A BST is a tree where the left child is smaller and the right child is larger than the parent node."
    },
    {
      question: "What is tree traversal?",
      answer: "Tree traversal is the process of visiting each node once using methods like inorder, preorder, or postorder."
    },
    {
      question: "What is inorder traversal?",
      answer: "Inorder traversal visits nodes in the order: left → root → right."
    },
    {
      question: "What is preorder traversal?",
      answer: "Preorder traversal visits nodes in the order: root → left → right."
    },
    {
      question: "What is postorder traversal?",
      answer: "Postorder traversal visits nodes in the order: left → right → root."
    },
    {
      question: "What is level order traversal?",
      answer: "Level order traversal visits nodes level by level using a queue."
    },
    {
      question: "What is a balanced binary tree?",
      answer: "A tree in which the height difference between left and right subtrees of every node is at most one."
    },
    {
      question: "What is an AVL tree?",
      answer: "An AVL tree is a self-balancing binary search tree where the balance factor is maintained as -1, 0, or 1."
    },
    {
      question: "What is a heap?",
      answer: "A heap is a complete binary tree used to implement priority queues efficiently."
    },
    {
      question: "What is a min heap?",
      answer: "A min heap is a heap where the parent node is always smaller than or equal to its children."
    },
    {
      question: "What is a max heap?",
      answer: "A max heap is a heap where the parent node is always larger than or equal to its children."
    },
    {
      question: "What are graphs?",
      answer: "A graph is a collection of nodes (vertices) connected by edges, used to represent networks."
    },
    {
      question: "What are directed and undirected graphs?",
      answer: "In directed graphs, edges have direction; in undirected graphs, edges are bidirectional."
    },
    {
      question: "What is a weighted graph?",
      answer: "A weighted graph has edges associated with weights representing costs or distances."
    },
    {
      question: "What is BFS (Breadth-First Search)?",
      answer: "BFS explores neighbors level by level using a queue."
    },
    {
      question: "What is DFS (Depth-First Search)?",
      answer: "DFS explores as far as possible along a branch before backtracking, usually using recursion or a stack."
    },
    {
      question: "What is adjacency matrix?",
      answer: "An adjacency matrix is a 2D array used to represent edges between vertices in a graph."
    },
    {
      question: "What is adjacency list?",
      answer: "An adjacency list represents a graph as an array of linked lists, storing neighbors of each vertex."
    },
    {
      question: "What is topological sorting?",
      answer: "Topological sorting orders vertices in a directed acyclic graph (DAG) such that each edge goes from earlier to later."
    },
    {
      question: "What is a spanning tree?",
      answer: "A spanning tree connects all vertices of a graph with minimum possible edges and no cycles."
    },
    {
      question: "What is Kruskal’s algorithm?",
      answer: "Kruskal’s algorithm finds a minimum spanning tree by adding edges in increasing order of weight."
    },
    {
      question: "What is Prim’s algorithm?",
      answer: "Prim’s algorithm builds a minimum spanning tree by adding the smallest edge that connects a new vertex."
    }
  ],

  // ===== BASIC DATA STRUCTURE SET 3 =====
  basic_data_structure_3: [
    {
      question: "What is Dijkstra’s algorithm?",
      answer: "Dijkstra’s algorithm finds the shortest path from a source node to all other nodes in a weighted graph."
    },
    {
      question: "What is Bellman-Ford algorithm?",
      answer: "Bellman-Ford also finds shortest paths but works with graphs having negative weights."
    },
    {
      question: "What is Floyd-Warshall algorithm?",
      answer: "Floyd-Warshall finds shortest paths between all pairs of vertices in a weighted graph."
    },
    {
      question: "What is dynamic programming?",
      answer: "Dynamic programming solves problems by breaking them into overlapping subproblems and storing results."
    },
    {
      question: "What is divide and conquer?",
      answer: "It’s a paradigm that divides a problem into smaller parts, solves them recursively, and combines results."
    },
    {
      question: "What is a trie data structure?",
      answer: "A trie is a tree-like data structure used for efficient storage and retrieval of strings, such as in dictionaries."
    },
    {
      question: "What is a disjoint set?",
      answer: "A disjoint set keeps track of elements partitioned into non-overlapping subsets using union and find operations."
    },
    {
      question: "What is path compression in union-find?",
      answer: "Path compression flattens the tree structure for faster subsequent find operations."
    },
    {
      question: "What is hashing used for?",
      answer: "Hashing is used to map data to a fixed-size value for fast access and retrieval."
    },
    {
      question: "What is load factor in hashing?",
      answer: "Load factor is the ratio of the number of stored elements to the table size, affecting performance."
    },
    {
      question: "What is rehashing?",
      answer: "Rehashing resizes the hash table and recalculates hash indices to reduce collisions."
    },
    {
      question: "What is the difference between BFS and DFS?",
      answer: "BFS uses a queue and explores level by level; DFS uses recursion or stack and goes deep first."
    },
    {
      question: "What is a self-balancing tree?",
      answer: "A self-balancing tree automatically maintains its height after insertions and deletions for efficiency."
    },
    {
      question: "What is a red-black tree?",
      answer: "A red-black tree is a balanced binary search tree with additional color properties ensuring balance."
    },
    {
      question: "What is a B-tree?",
      answer: "A B-tree is a self-balancing search tree commonly used in databases and file systems."
    },
    {
      question: "What is a B+ tree?",
      answer: "B+ tree is an extension of B-tree with all data stored in leaf nodes and linked sequentially."
    },
    {
      question: "What is a heap overflow?",
      answer: "A heap overflow occurs when a program writes more data to a heap block than allocated."
    },
    {
      question: "What is stack overflow?",
      answer: "Stack overflow occurs when a program uses more stack memory than available, often due to deep recursion."
    },
    {
      question: "What is amortized analysis?",
      answer: "Amortized analysis calculates the average time per operation over a sequence of operations."
    },
    {
      question: "What is a deque?",
      answer: "A deque (double-ended queue) allows insertion and deletion from both ends."
    },
    {
      question: "What is a priority queue implemented with?",
      answer: "Priority queues are often implemented using heaps."
    },
    {
      question: "What is circular buffer?",
      answer: "A circular buffer uses fixed memory that wraps around when it reaches the end."
    },
    {
      question: "What is sparse matrix?",
      answer: "A sparse matrix contains mostly zero values, stored efficiently using coordinate or CSR format."
    },
    {
      question: "What is a segment tree?",
      answer: "A segment tree is a binary tree used for range queries and updates in logarithmic time."
    },
    {
      question: "What is a Fenwick tree?",
      answer: "A Fenwick tree (Binary Indexed Tree) supports efficient prefix sum and update operations."
    },
    {
      question: "What is top-down vs bottom-up approach?",
      answer: "Top-down uses recursion with memoization; bottom-up builds the solution iteratively."
    },
    {
      question: "What is recursion tree method?",
      answer: "It visualizes recursive calls as a tree structure for complexity analysis."
    },
    {
      question: "What are graphs used for in real life?",
      answer: "Graphs are used in social networks, maps, recommendation systems, and network routing."
    },
    {
      question: "What is the adjacency representation of graphs?",
      answer: "It can be represented using adjacency lists or matrices for storing relationships between vertices."
    },
    {
      question: "What is the importance of data structures?",
      answer: "Data structures improve efficiency, scalability, and organization of data for problem-solving."
    }
  ]
};
