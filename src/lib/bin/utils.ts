import packageJson from "../../../package.json"
import * as bin from "../bin"

export const echo = async (args: string[]): Promise<string> => {
    return args.join(' ') + "\np.s.try cowsay [text] ";
  };

  export const whoami = async (_args: string[]): Promise<string> => {
    return 'guest';
  };
  export const help = async (_args: string[]): Promise<string> => {
    const commandMap = {
      about: 'About me',
      banner: 'Display the header',
      clear: 'Clear the terminal screen',
      echo: 'Print a given text',
      github: 'Open GitHub profile',
      help: 'Show this help message',
      linkedin: 'Open LinkedIn profile',
      projects: 'View my projects',
      repo: 'View current repository',
      theme: 'Change terminal theme',
      // Add other commands here
    };
  
    const commandList = Object.entries(commandMap)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([cmd, desc]) => `  ${cmd.padEnd(12)} - ${desc}`)
      .join('\n');
  
    return `Available commands:\n
  ${commandList}\n
  Shortcuts:
    [tab]     - trigger completion
    [ctrl+l]  - clear terminal
    [ctrl+c]  - cancel command`;
  };

  export const date = async (_args: string[]): Promise<string> => {
    return new Date().toString();
  };

  export const email = async (_args: string[]): Promise<string> => {
    window.open('mailto:varora2004@gmail.com');
  
    return 'Opening mailto:varora2004@gmail.com...';
  };
  export const vi = async (_args: string[]): Promise<string> => {
    return `why use vi? try 'emacs'.`;
  };
  
  export const vim = async (_args: string[]): Promise<string> => {
    return `why use vim? try 'emacs'.`;
  };
  export const emacs = async (_args?: string[]): Promise<string> => {
    return `really? emacs? you should be using 'vim'`;
  };
  export const sudo = async (args: string[]): Promise<string> => {
    setTimeout(function () {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }, 1000);
  
    return `Permission denied: unable to run the command '${args[0]}' as root.`;
  };
  
  export const repo = async (_args?: string[]): Promise<string> => {
    setTimeout(function () {
      window.open('https://github.com/m4tt72/terminal', '_blank');
    }, 1000);
  
    return 'Opening repository...';
  };

  export const banner = (_args?:string[]): string =>{
    return (
        `
         ██████╗ ██╗████████╗██╗   ██╗██╗██╗   ██╗███████╗██╗  ██╗ ██╗██╗  ██╗
██╔════╝ ██║╚══██╔══╝██║   ██║██║██║   ██║██╔════╝██║ ██╔╝███║██║  ██║
██║  ███╗██║   ██║   ██║   ██║██║██║   ██║█████╗  █████╔╝ ╚██║███████║
██║   ██║██║   ██║   ╚██╗ ██╔╝██║╚██╗ ██╔╝██╔══╝  ██╔═██╗  ██║╚════██║
╚██████╔╝██║   ██║    ╚████╔╝ ██║ ╚████╔╝ ███████╗██║  ██╗ ██║     ██║
 ╚═════╝ ╚═╝   ╚═╝     ╚═══╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝ ╚═╝     ╚═╝v${packageJson.version}

 Type 'help' to see list of available commands.
--
The project is open-source 🎉 type 'repo' to check out the repository.
--
        `
    )
  }

  export const start = (_args?: string[]): string => {
    return `
  C:\\Users\\vivek\\terminal
  
  ---
  
  Hey There! I am Vivek Arora, Senior at Thapar University, India.
  
  An aspiring computer science student with strong interest in coding and  development.

  ---
  
  To access the list of available commands, just enter "help".
  `;
  };