import React from "react";

import {History as HistoryInterface} from "@/interfaces/index"
import Username from "../username/username";

interface Props{
    history : Array<HistoryInterface>
}

export const History :React.FC<Props> = ({history})=>{
    return (
        <>
        {
            history.map((entry: HistoryInterface,index:number)=>(
                <div key={entry.command+index}>
                    <div className="flex flex-col space-x-2">
                    <div className="flex-shrink">
                    <Username/>
                    </div>
                    <div className="flex-grow">
                        {entry.command}
                    </div>
                    <p
                    className="whitespace-pre-wrap mb-2"
                    style={{ lineHeight: 'normal' }}
                    dangerouslySetInnerHTML={{ __html: entry.output }}
                    />
                    </div>

                </div>
            ))
        }

        </>
    )
}