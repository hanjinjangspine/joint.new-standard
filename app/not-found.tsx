import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase text-brand-600">404</p>
        <h1 className="mt-3 text-4xl font-bold text-ink">페이지를 찾을 수 없습니다.</h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          요청하신 페이지가 이동되었거나 준비 중입니다. 관절센터 메인 페이지에서
          필요한 안내를 확인해 주세요.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-brand-700 px-5 py-3 font-bold text-white hover:bg-brand-800"
        >
          메인으로 이동
        </Link>
      </div>
    </main>
  );
}
