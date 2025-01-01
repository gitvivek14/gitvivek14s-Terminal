import React,{useState,useEffect} from "react";
import { useTheme } from "@/lib/utils/themeProvider";

export const Username = ()=>{
    const [hostname, setHostname] = useState('');
    const { theme } = useTheme();

    useEffect(()=>{
        setHostname(window.location.hostname);
    })

    return (
        <div>
          <span
            style={{
              color: theme.yellow,
            }}
          >
            vivek
          </span>
          <span
            style={{
              color: theme.white,
            }}
          >
            @desktop
          </span>
          <span
            style={{
              color: theme.green,
            }}
          >
            {hostname}
          </span>
          <span
            style={{
              color: theme.white,
            }}
          >
            :$ ~
          </span>
        </div>
      );
}

export default Username;