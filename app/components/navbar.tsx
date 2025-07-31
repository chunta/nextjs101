import Link from "next/link";

function Navbar() {
    return <nav
            className="
                max-w-3xl    // 限制最大寬度為 48rem（768px）
                mx-auto      // 水平置中（左右 margin 為 auto）
                py-8         // 上下內距為 1rem（16px）
                flex         // 使用 Flexbox 排列子元素（橫向排列）
                gap-x-4      // 子元素間水平方向間距為 1rem（16px）
                border-b-2   // 下邊框寬度為 2px（常用於區隔 header 區域）
            "
        >
        <Link href='/'>Home</Link>
        <Link href='/info'>Info</Link>
        <Link href='/about'>About</Link>
    </nav>;
}

export default Navbar;