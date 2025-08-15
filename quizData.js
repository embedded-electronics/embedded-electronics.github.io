const quizData = {
  basic_linux_1 = [
    { question: "What command is used to list files?", options: ["ls", "dir", "list", "files"], answer: "ls" },
    { question: "What is the root directory symbol?", options: ["/", "~", ".", ".."], answer: "/" },
    { question: "Which command is used to change the current directory?", options: ["cd", "chdir", "pwd", "ls"], answer: "cd" },
    { question: "Which command shows the current working directory?", options: ["pwd", "cwd", "where", "path"], answer: "pwd" },
    { question: "Which command is used to create a new directory?", options: ["mkdir", "newdir", "makedir", "createdir"], answer: "mkdir" },
    { question: "What command is used to remove an empty directory?", options: ["rmdir", "rm -r", "deldir", "removedir"], answer: "rmdir" },
    { question: "Which command is used to copy files?", options: ["cp", "copy", "cfile", "duplicate"], answer: "cp" },
    { question: "Which command is used to move or rename files?", options: ["mv", "move", "ren", "shift"], answer: "mv" },
    { question: "What command is used to remove files?", options: ["rm", "del", "erase", "delete"], answer: "rm" },
    { question: "Which command displays the content of a file?", options: ["cat", "view", "show", "display"], answer: "cat" },
    { question: "Which command is used to search for text in a file?", options: ["grep", "find", "search", "look"], answer: "grep" },
    { question: "Which command shows the manual page of another command?", options: ["man", "help", "info", "guide"], answer: "man" },
    { question: "Which command shows currently logged-in users?", options: ["who", "users", "w", "whoami"], answer: "who" },
    { question: "Which command is used to display the date and time?", options: ["date", "time", "clock", "now"], answer: "date" },
    { question: "Which command is used to display disk usage?", options: ["df", "du", "diskfree", "space"], answer: "df" },
    { question: "Which command shows file size and space usage per directory?", options: ["du", "df", "ls -lh", "size"], answer: "du" },
    { question: "Which command is used to show hidden files?", options: ["ls -a", "ls -h", "ls -hidden", "ls -s"], answer: "ls -a" },
    { question: "What command is used to display the first lines of a file?", options: ["head", "top", "first", "start"], answer: "head" },
    { question: "What command is used to display the last lines of a file?", options: ["tail", "bottom", "last", "end"], answer: "tail" },
    { question: "Which command is used to count words, lines, and characters in a file?", options: ["wc", "count", "linecount", "stats"], answer: "wc" },
    { question: "Which command is used to display running processes?", options: ["ps", "proc", "tasks", "process"], answer: "ps" },
    { question: "Which command shows the system's uptime?", options: ["uptime", "time", "sysup", "runtime"], answer: "uptime" },
    { question: "Which command is used to clear the terminal screen?", options: ["clear", "cls", "reset", "wipe"], answer: "clear" },
    { question: "Which command is used to log out from the terminal?", options: ["exit", "logout", "quit", "bye"], answer: "exit" },
    { question: "What symbol is used for the home directory?", options: ["~", "/", ".", ".."], answer: "~" },
    { question: "Which command shows network configuration?", options: ["ifconfig", "netstat", "ipconfig", "netconfig"], answer: "ifconfig" },
    { question: "Which command is used to display active network connections?", options: ["netstat", "ifconfig", "ping", "connections"], answer: "netstat" },
    { question: "Which command is used to test network connectivity?", options: ["ping", "test", "nettest", "connect"], answer: "ping" },
    { question: "Which command is used to download files from the internet?", options: ["wget", "curl", "fetch", "download"], answer: "wget" },
    { question: "Which command is used to change file permissions?", options: ["chmod", "chperm", "permset", "setperm"], answer: "chmod" },
    { question: "Which command is used to change file ownership?", options: ["chown", "owner", "setown", "setuser"], answer: "chown" },
    { question: "Which command is used to compress files?", options: ["gzip", "zip", "compress", "pack"], answer: "gzip" },
    { question: "Which command is used to uncompress `.gz` files?", options: ["gunzip", "unzip", "extract", "unpack"], answer: "gunzip" },
    { question: "Which command is used to search for files?", options: ["find", "search", "locate", "whereis"], answer: "find" },
    { question: "Which command is used to quickly locate files using a database?", options: ["locate", "find", "search", "track"], answer: "locate" },
    { question: "Which command is used to display kernel version?", options: ["uname -r", "version", "kernver", "sysver"], answer: "uname -r" },
    { question: "Which command is used to display all system information?", options: ["uname -a", "sysinfo", "info", "system"], answer: "uname -a" },
    { question: "Which command is used to display memory usage?", options: ["free", "meminfo", "mem", "ram"], answer: "free" },
    { question: "Which command is used to monitor system processes in real time?", options: ["top", "htop", "monitor", "procview"], answer: "top" },
    { question: "Which command is used to list block devices?", options: ["lsblk", "blklist", "diskls", "blockdev"], answer: "lsblk" },
    { question: "Which command is used to safely shut down the system?", options: ["shutdown", "poweroff", "halt", "off"], answer: "shutdown" },
    { question: "Which command is used to restart the system?", options: ["reboot", "restart", "shutdown -r", "boot"], answer: "reboot" },
    { question: "Which command is used to print text to the terminal?", options: ["echo", "print", "say", "output"], answer: "echo" },
    { question: "Which command shows the command history?", options: ["history", "cmdlog", "cmdhist", "log"], answer: "history" },
    { question: "Which command is used to display a calendar?", options: ["cal", "calendar", "date", "month"], answer: "cal" },
    { question: "Which command is used to display help for shell built-ins?", options: ["help", "man", "info", "assist"], answer: "help" },
    { question: "Which command is used to switch users?", options: ["su", "switch", "user", "login"], answer: "su" },
    { question: "Which command is used to show all environment variables?", options: ["env", "set", "export", "vars"], answer: "env" },
    { question: "Which command is used to set environment variables?", options: ["export", "setenv", "envset", "assign"], answer: "export" },
    { question: "Which command is used to display system boot messages?", options: ["dmesg", "bootlog", "syslog", "messages"], answer: "dmesg" }
]
  linux: [
    { question: "What command is used to list files?", options: ["ls", "dir", "list"], answer: "ls" },
    { question: "What is the root directory symbol?", options: ["/", "~", "."], answer: "/" }
  ],
  microcontrollers: [
    { question: "Which is a popular microcontroller?", options: ["Arduino UNO", "Raspberry Pi", "ESP8266"], answer: "Arduino UNO" }
  ],
  cprogramming: [
    { question: "Which header file is used for printf?", options: ["<stdio.h>", "<stdlib.h>", "<string.h>"], answer: "<stdio.h>" },
    {  
      question: "What will be the output of the following code?<br><pre>#include &lt;stdio.h&gt;<br>int main() {<br>    printf(\"%d\", 5 + 3);<br>    return 0;<br>}</pre>",
      options: ["5", "8", "Error"],
      answer: "8" 
    }
  ]
};
