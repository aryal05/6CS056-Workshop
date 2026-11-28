import { Head, Link, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    Code2,
    Database,
    GraduationCap,
    Route as RouteIcon,
    Users,
} from 'lucide-react';
import { dashboard, login, register } from '@/routes';

const endpoints = [
    { method: 'GET', path: '/api/students', purpose: 'List students' },
    { method: 'POST', path: '/api/students', purpose: 'Create a student' },
    { method: 'GET', path: '/api/students/{id}', purpose: 'Show a student' },
    { method: 'PUT', path: '/api/students/{id}', purpose: 'Update a student' },
    {
        method: 'DELETE',
        path: '/api/students/{id}',
        purpose: 'Delete a student',
    },
    { method: 'GET', path: '/api/courses', purpose: 'List courses' },
    { method: 'POST', path: '/api/courses', purpose: 'Create a course' },
    { method: 'GET', path: '/api/courses/{id}', purpose: 'Show a course' },
    { method: 'PUT', path: '/api/courses/{id}', purpose: 'Update a course' },
    { method: 'DELETE', path: '/api/courses/{id}', purpose: 'Delete a course' },
];

const methodClasses: Record<string, string> = {
    GET: 'bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300',
    POST: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
    PUT: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
    DELETE: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300',
};

export default function Welcome() {
    const { auth, currentTeam } = usePage().props;
    const dashboardUrl = currentTeam ? dashboard(currentTeam.slug) : '/';

    return (
        <>
            <Head title="Workshop 3 API" />

            <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
                <header className="border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-600/30">
                                <Code2 className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="font-semibold tracking-tight">
                                    Workshop 3
                                </p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                    Laravel REST API
                                </p>
                            </div>
                        </div>

                        <nav className="flex items-center gap-2 text-sm">
                            {auth.user ? (
                                <Link
                                    href={dashboardUrl}
                                    className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="rounded-lg px-3 py-2 font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                <main>
                    <section className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.14),transparent_42%)]" />
                        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
                            <div className="flex flex-col items-start gap-6">
                                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                    API ready and tested
                                </div>
                                <div className="flex max-w-3xl flex-col gap-4">
                                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                        Training Institute
                                        <span className="block text-indigo-600 dark:text-indigo-400">
                                            REST API
                                        </span>
                                    </h1>
                                    <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                                        A beginner-friendly Laravel API for
                                        managing students and courses. It uses
                                        Form Requests, Eloquent Resources, route
                                        model binding, and correct HTTP status
                                        codes.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="/api/students"
                                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
                                    >
                                        View Students API
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                    <a
                                        href="/api/courses"
                                        className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                                    >
                                        View Courses API
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-2xl shadow-indigo-950/20">
                                <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
                                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                                    <span className="ml-2 font-mono text-xs text-slate-500">
                                        GET /api/students/1
                                    </span>
                                </div>
                                <pre className="overflow-x-auto py-5 font-mono text-sm leading-7 text-slate-300">
                                    <code>{`{
  "data": {
    "id": 1,
    "name": "Sita Karki",
    "email": "sita@example.com",
    "phone": "+9779812345678",
    "date_of_birth": "2002-04-15",
    "age": 24
  }
}`}</code>
                                </pre>
                                <div className="flex items-center gap-2 border-t border-slate-800 pt-4 text-xs text-slate-400">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                                    200 OK · JSON response
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
                        <div className="mb-8 flex flex-col gap-2">
                            <p className="text-sm font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
                                API resources
                            </p>
                            <h2 className="text-3xl font-bold tracking-tight">
                                Two complete CRUD APIs
                            </h2>
                            <p className="max-w-2xl text-slate-600 dark:text-slate-400">
                                Open the GET endpoints in your browser. Use the
                                included Postman collection for create, update,
                                and delete requests.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <ApiCard
                                icon={<Users className="h-6 w-6" />}
                                title="Students API"
                                description="Manage student contact and personal information with validated email addresses and calculated ages."
                                path="/api/students"
                                fields="name · email · phone · address · date of birth"
                                color="indigo"
                            />
                            <ApiCard
                                icon={<GraduationCap className="h-6 w-6" />}
                                title="Courses API"
                                description="Manage training courses, unique course codes, duration, descriptions, and course fees."
                                path="/api/courses"
                                fields="name · code · description · duration · fee"
                                color="emerald"
                            />
                        </div>
                    </section>

                    <section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/40">
                        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
                            <div className="mb-8 flex items-center gap-3">
                                <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                                    <RouteIcon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        Available endpoints
                                    </h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        10 RESTful routes registered with
                                        Route::apiResources
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {endpoints.map((endpoint) => (
                                        <div
                                            key={`${endpoint.method}-${endpoint.path}`}
                                            className="grid gap-3 px-4 py-4 sm:grid-cols-[5rem_1fr_1fr] sm:items-center sm:px-6"
                                        >
                                            <span
                                                className={`w-fit rounded-md px-2.5 py-1 font-mono text-xs font-bold ${methodClasses[endpoint.method]}`}
                                            >
                                                {endpoint.method}
                                            </span>
                                            <code className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                                {endpoint.path}
                                            </code>
                                            <span className="text-sm text-slate-500 dark:text-slate-400">
                                                {endpoint.purpose}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
                        <div className="grid gap-6 lg:grid-cols-3">
                            <Feature
                                icon={<Database className="h-5 w-5" />}
                                title="Database ready"
                                description="Student, Course, and Sanctum migrations are applied to SQLite."
                            />
                            <Feature
                                icon={<CheckCircle2 className="h-5 w-5" />}
                                title="Fully tested"
                                description="14 API tests cover CRUD operations, resources, and validation."
                            />
                            <Feature
                                icon={<BookOpen className="h-5 w-5" />}
                                title="Submission ready"
                                description="A Workshop report and importable Postman collection are included."
                            />
                        </div>
                    </section>
                </main>

                <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                    <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 dark:text-slate-400">
                        <p>6CS056 · Workshop 3 · Laravel REST API</p>
                        <p>Students + Courses · 10 endpoints</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

function ApiCard({
    icon,
    title,
    description,
    path,
    fields,
    color,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    path: string;
    fields: string;
    color: 'indigo' | 'emerald';
}) {
    const iconClasses =
        color === 'indigo'
            ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
            : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300';

    return (
        <article className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <div className={`w-fit rounded-xl p-3 ${iconClasses}`}>{icon}</div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="leading-7 text-slate-600 dark:text-slate-400">
                    {description}
                </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-950">
                <p className="mb-2 font-mono text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    GET {path}
                </p>
                <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {fields}
                </p>
            </div>
            <a
                href={path}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400"
            >
                Open live JSON
                <ArrowRight className="h-4 w-4" />
            </a>
        </article>
    );
}

function Feature({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {icon}
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {description}
                </p>
            </div>
        </div>
    );
}
