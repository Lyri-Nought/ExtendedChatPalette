import React, { useRef, useState } from 'react';

export default function FrameBox() {
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsResizing(true);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isResizing && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const { clientX, clientY } = e;

        // Calculate new width and height based on the mouse position
        const newWidth = clientX - containerRect.left;
        const newHeight = clientY - containerRect.top;

        // Set the new width and height
        containerRef.current.style.width = `${newWidth}px`;
        containerRef.current.style.height = `${newHeight}px`;
        console.log(`width:${newWidth}px, height:${newHeight}px`)
        }
    };

    const handleMouseUp = () => {
        setIsResizing(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    return (
        <span ref={containerRef} /* style={{ position: "relative"}} */>
            <div // 上
            className="draggable-disable"
            style={{
                position: "absolute",
                userSelect: "none",
                width: "100%",
                height: "10px",
                top: "-5px",
                left: "0px",
                cursor: "row-resize"
            }}
            onMouseDown={handleMouseDown}
            />
            <div // 右
            className="draggable-disable"
            style={{
                position: "absolute",
                userSelect: "none",
                width: "10px",
                height: "100%",
                top: "0px",
                right: "-5px",
                cursor: "col-resize"
            }}
            onMouseDown={handleMouseDown}
            />
            <div // 下
            className="draggable-disable"
            style={{
                position: "absolute",
                userSelect: "none",
                width: "100%",
                height: "10px",
                bottom: "-5px",
                left: "0px",
                cursor: "row-resize"
            }}
            onMouseDown={handleMouseDown}
            />
            <div // 左
            className="draggable-disable"
            style={{
                position: "absolute",
                userSelect: "none",
                width: "10px",
                height: "100%",
                top: "0px",
                left: "-5px",
                cursor: "col-resize"
            }}
            onMouseDown={handleMouseDown}
            />
            <div // 右上
            className="draggable-disable"
            style={{
                position: "absolute",
                userSelect: "none",
                width: "20px",
                height: "20px",
                right: "-10px",
                top: "-10px",
                cursor: "ne-resize"
            }}
            onMouseDown={handleMouseDown}
            />
            <div // 右下
            className="draggable-disable"
            style={{
                position: "absolute",
                userSelect: "none",
                width: "20px",
                height: "20px",
                right: "-10px",
                bottom: "-10px",
                cursor: "nw-resize"
            }}
            onMouseDown={handleMouseDown}
            />
            <div // 左下
            className="draggable-disable"
            style={{
                position: "absolute",
                userSelect: "none",
                width: "20px",
                height: "20px",
                left: "-10px",
                bottom: "-10px",
                cursor: "ne-resize"
            }}
            onMouseDown={handleMouseDown}
            />
            <div // 左上
            className="draggable-disable"
            style={{
                position: "absolute",
                userSelect: "none",
                width: "20px",
                height: "20px",
                left: "-10px",
                top: "-10px",
                cursor: "nw-resize"
            }}
            onMouseDown={handleMouseDown}
            />
        </span>
    );
}