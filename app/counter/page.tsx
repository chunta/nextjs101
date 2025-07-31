import Counter from "@/components/Counter";

function CounterPage()
{
    return (
    <div className="max-w-3xl mx-auto">
    <h1 className="text-6xl mb-16">Counter Page</h1>
    <section><Counter/></section>
    <h1 className="text-xs border">text-xs（0.75rem / 12px）</h1>
    <h1 className="text-sm border">text-sm（0.875rem / 14px）</h1>
    <h1 className="text-base border">text-base（1rem / 16px）</h1>
    <h1 className="text-lg border">text-lg（1.125rem / 18px）</h1>
    <h1 className="text-xl border">text-xl（1.25rem / 20px）</h1>
    <h1 className="text-2xl border">text-2xl（1.5rem / 24px）</h1>
    <h1 className="text-3xl border">text-3xl（1.875rem / 30px）</h1>
    <h1 className="text-4xl border">text-4xl（2.25rem / 36px）</h1>
    <h1 className="text-5xl border">text-5xl（3rem / 48px）</h1>
    <h1 className="text-6xl border">text-6xl（3.75rem / 60px）</h1>
    <h1 className="text-7xl border">text-7xl（4.5rem / 72px）</h1>
    <h1 className="text-8xl border">text-8xl（6rem / 96px）</h1>
    <h1 className="text-9xl border">text-9xl（8rem / 128px）</h1>

    </div>)
}

export default CounterPage;