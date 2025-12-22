import React, { useState, useEffect, useRef } from 'react';
import styles from './Terminal.module.css';
import { config } from '../data/config';
import { useTheme } from '../context/ThemeContext';

interface HistoryItem {
    type: 'input' | 'output';
    content: string | React.ReactNode;
}

const Terminal: React.FC = () => {
    const { theme } = useTheme();
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<HistoryItem[]>([
        { type: 'output', content: 'Welcome to AbhiOS v1.0.0' },
        { type: 'output', content: "Type 'help' to see available commands." },
    ]);
    const [minimized, setMinimized] = useState(false);
    const [uptime, setUptime] = useState(0);
    const bodyRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Uptime counter
    useEffect(() => {
        const interval = setInterval(() => {
            setUptime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
    }, [history]);

    // Focus input on click
    const focusInput = () => {
        if (!minimized) inputRef.current?.focus();
    };

    const formatUptime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}h ${m}m ${s}s`;
    };

    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let output: React.ReactNode = '';

        switch (cleanCmd) {
            case 'help':
                output = (
                    <div>
                        Available commands:<br />
                        &nbsp;&nbsp;help     - Display available commands<br />
                        &nbsp;&nbsp;config   - Show system configuration<br />
                        &nbsp;&nbsp;whoami   - Display user information<br />
                        &nbsp;&nbsp;ls       - List available projects<br />
                        &nbsp;&nbsp;clear    - Clear terminal screen<br />
                        &nbsp;&nbsp;exit     - Minimize/hide terminal
                    </div>
                );
                break;
            case 'config':
                output = (
                    <div>
                        Theme: {theme} mode<br />
                        Version: 2.0.0<br />
                        Repo: <a href={config.about.social.github} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>GitHub</a>
                    </div>
                );
                break;
            case 'whoami':
                output = (
                    <div>
                        Name: {config.about.name}<br />
                        Role: {config.about.role}<br />
                        Uptime: {formatUptime(uptime)}<br />
                        Location: {config.about.location}
                    </div>
                );
                break;
            case 'ls':
                output = (
                    <div>
                        Projects:<br />
                        {Object.entries(config.skills).map(([category, details]) => (
                            <div key={category}>
                                📦 {category}/ ({details.items.length})
                            </div>
                        ))}
                    </div>
                );
                break;
            case 'clear':
                setHistory([]);
                return; // Special case, return early
            case 'exit':
                setMinimized(true);
                output = 'Terminal minimized. Click the header or icon to restore.';
                break;
            case '':
                output = null;
                break;
            default:
                output = `Command not found: ${cleanCmd}. Type 'help' for available commands.`;
        }

        if (cleanCmd !== 'clear') {
            setHistory(prev => [
                ...prev,
                { type: 'input', content: cmd },
                ...(output ? [{ type: 'output', content: output }] : []) as HistoryItem[]
            ]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className={`${styles.terminalWrapper} ${minimized ? styles.minimized : ''}`}>
            <div className={styles.terminalWindow} style={minimized ? { height: '40px' } : {}}>
                <div className={styles.header} onClick={() => setMinimized(false)}>
                    <div className={styles.buttons}>
                        <div className={`${styles.circle} ${styles.red}`} onClick={(e) => { e.stopPropagation(); setMinimized(true); }}></div>
                        <div className={`${styles.circle} ${styles.yellow}`} onClick={(e) => { e.stopPropagation(); setMinimized(true); }}></div>
                        <div className={`${styles.circle} ${styles.green}`} onClick={(e) => { e.stopPropagation(); setMinimized(false); }}></div>
                    </div>
                    <div className={styles.title}>abhi@portfolio: ~</div>
                </div>

                {!minimized && (
                    <div className={styles.body} onClick={focusInput} ref={bodyRef}>
                        {history.map((item, index) => (
                            <div key={index} className={styles.line}>
                                {item.type === 'input' ? (
                                    <div className={styles.inputLine}>
                                        <span className={styles.promptLabel}>~/abhi$</span>
                                        <span>{item.content}</span>
                                    </div>
                                ) : (
                                    <div className={styles.output}>{item.content}</div>
                                )}
                            </div>
                        ))}

                        <div className={styles.inputLine}>
                            <span className={styles.promptLabel}>~/abhi$</span>
                            <input
                                ref={inputRef}
                                className={styles.input}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                spellCheck="false"
                                autoComplete="off"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Terminal;
