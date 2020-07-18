import React, { useContext } from 'react'
import { DarkModeContext } from './DarkModeContext';


export default function Contect() {

    const [isDarkMode] = useContext(DarkModeContext);

    return (
      <div className={isDarkMode ? "contentDark content" : "content"}>
        <h1>Hello world</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem atque
          soluta optio modi quo itaque cupiditate inventore vitae saepe odio
          esse eos ab placeat deleniti repellat facere magni nulla, quos
          assumenda excepturi velit doloremque fuga illum enim. Dolores
          reprehenderit eligendi rerum odit incidunt natus voluptates nam hic
          in, rem exercitationem.
        </p>
      </div>
    );
}