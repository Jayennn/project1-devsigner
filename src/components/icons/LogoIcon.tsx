import {cn} from "@/lib/utils.ts";

const LogoIcon = ({theme = "default"}: { theme?: "default" | "blue" }) => {
    const styles = {
        fillCircle: cn(theme === 'blue' ? "white" : "#0192FE"),
        fileRect1: cn(theme === 'blue' ? "#0192FE" : "#F9FAFF"),
        fileRect2: cn(theme === 'blue' ? "#0192FE" : "#F9FAFF"),
        fileRect3: cn(theme === 'blue' ? "#78C5FF" : "#5BB9FF"),
        fileRect4: cn(theme === 'blue' ? "#0192FE" : "#F9FAFF"),
    }
    return <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill={styles.fillCircle}/>
        <rect x="10.7461" y="10.7461" width="5.97015" height="5.97015" rx="1.19403" fill={styles.fileRect1}/>
        <rect x="18.5073" y="10.7461" width="10.1493" height="5.97015" rx="1.19403" fill={styles.fileRect2}/>
        <rect x="20.2983" y="18.5073" width="5.97015" height="5.97015" rx="1.19403" fill={styles.fileRect3}/>
        <rect x="10.7461" y="18.5073" width="7.76119" height="10.7463" rx="1.19403" fill={styles.fileRect4}/>
    </svg>
}

export default LogoIcon