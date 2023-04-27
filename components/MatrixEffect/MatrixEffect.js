// components/MatrixEffectHTML.js
import React, { useEffect, useRef } from "react"

const MatrixEffectHTML = () => {
   const containerRef = useRef()

   useEffect(() => {
      const characters =
         "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?/.,:;|[]{}`~アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"

      const container = containerRef.current

      const createColumn = () => {
         const column = document.createElement("div")
         column.className = "matrix-column"

         const characterCount = Math.floor(Math.random() * 15) + 10

         for (let i = 0; i < characterCount; i++) {
            const character = document.createElement("div")
            character.className = "matrix-character"
            character.textContent =
               characters[Math.floor(Math.random() * characters.length)]
            column.appendChild(character)
         }

         container.appendChild(column)
         column.style.animationDuration = `${Math.random() * 2 + 1}s`
         column.style.animationDelay = `${Math.random() * 2}s`
         column.style.left = `${Math.random() * 100}vw`

         setTimeout(() => {
            container.removeChild(column)
            createColumn()
         }, parseFloat(column.style.animationDuration) * 1000)
      }

      for (let i = 0; i < 100; i++) {
         createColumn()
      }
   }, [])

   return (
      <div
         ref={containerRef}
         className="matrix-container"
         style={{
            position: "fixed",
            zIndex: -1,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
         }}
      />
   )
}

export default MatrixEffectHTML
