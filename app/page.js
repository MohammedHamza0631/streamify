import Link from 'next/link';
import { 
  ChartBarIcon, 
  MusicalNoteIcon,
  UserGroupIcon,
  BanknotesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Advanced Analytics',
    description: 'Get detailed insights into your music streaming platform with real-time analytics and metrics.',
    icon: ChartBarIcon,
  },
  {
    name: 'Music Tracking',
    description: 'Track performance of songs, artists, and albums with comprehensive statistics.',
    icon: MusicalNoteIcon,
  },
  {
    name: 'User Insights',
    description: 'Understand your user base with detailed demographic and engagement metrics.',
    icon: UserGroupIcon,
  },
  {
    name: 'Revenue Analytics',
    description: 'Monitor your revenue streams from subscriptions and advertisements.',
    icon: BanknotesIcon,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <Link href="/dashboard" className="inline-flex space-x-6">
                <span className="rounded-full bg-accent-mint/10 px-3 py-1 text-sm font-semibold leading-6 text-accent-mint ring-1 ring-inset ring-accent-mint/20">
                  Latest Updates
                </span>
              </Link>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Music Streaming Analytics Made Simple
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/60">
              Transform your music streaming platform with powerful analytics. Monitor user engagement,
              track revenue, and make data-driven decisions with our comprehensive dashboard.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/dashboard"
                className="rounded-lg bg-accent-mint px-4 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-accent-mint/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-mint flex items-center gap-2 group"
              >
                View Dashboard
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#features" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                src="/dashboard-preview.png"
                alt="Dashboard preview"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-xl bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-accent-mint">Analytics Platform</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to analyze your platform
            </p>
            <p className="mt-6 text-lg leading-8 text-white/60">
              Get comprehensive insights into your music streaming platform's performance with our
              powerful analytics dashboard.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <feature.icon className="h-5 w-5 flex-none text-accent-mint" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-white/60">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to boost your insights?
              <br />
              Start using our dashboard today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/60">
              Get started with our analytics dashboard and unlock the full potential of your music
              streaming platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/dashboard"
                className="rounded-lg bg-accent-mint px-4 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-accent-mint/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-mint flex items-center gap-2 group"
              >
                Get started
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#features" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
