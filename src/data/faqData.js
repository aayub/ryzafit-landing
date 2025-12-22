export const faqCategories = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
    description: 'General questions for onboarding and new users.',
    heroImage: '/app-mockup.png',
    articles: [
      {
        question: 'What is RyzaFit?',
        answer:
          'RyzaFit is our flagship training companion that brings programming, workout logging, analytics, and accountability into one modern app so you can train smarter anywhere.'
      },
      {
        question: 'What plans are available (monthly vs yearly)?',
        answer: 'RyzaFit offers flexible subscription options:',
        bullets: [
          'Monthly plan – billed every month with full access to base features.',
          'Yearly plan – billed once per year at a lower effective monthly rate.'
        ],
        outro: 'Pricing and plan availability are shown in-app before checkout.'
      },
      {
        question: 'What features are included in RyzaFit?',
        answer: 'Every RyzaFit account includes the core training toolkit:',
        bullets: [
          'Workout logging with sets, reps, weight, time, and RPE',
          'Exercise library with filters, search, and favorites',
          'Workout history timeline and calendar view',
          'Progress charts and performance tracking',
          'Routine builder and reusable templates',
          'Interactive muscle visuals',
          'Apple Watch companion app'
        ]
      },
      {
        question: 'What features are included in RyzaFit Pro?',
        answer: 'RyzaFit Pro unlocks advanced performance tools such as:',
        bullets: [
          'Deeper analytics with unlimited chart pins',
          'Expanded routine generator options and custom splits',
          'Priority data sync across devices',
          'Early access to experimental training features'
        ],
        outro: 'Look for the Pro badge inside the app to see which features require an upgrade.'
      },
      {
        question: 'How do I create an account?',
        intro: 'Account creation happens in a few taps:',
        steps: [
          'Download RyzaFit from the App Store.',
          'Open the app and choose Sign Up.',
          'Enter your email, create a password, or continue with Apple.',
          'Verify your email (if prompted) to finish onboarding.'
        ]
      },
      {
        question: 'How do I set up my profile?',
        intro: 'After creating an account:',
        steps: [
          'Tap Profile → Edit Profile.',
          'Add your name, photo, bio, and training preferences.',
          'Enter stats like height, weight, and experience level.',
          'Save to personalize charts and recommendations.'
        ]
      },
      {
        question: 'How do I install RyzaFit on Apple Watch?',
        intro: 'To install the companion app:',
        steps: [
          'Install RyzaFit on your iPhone first.',
          'Open the Watch app on iPhone.',
          'Scroll to Available Apps and find RyzaFit.',
          'Tap Install to add it to Apple Watch.'
        ],
        outro: 'Once installed, you can start and monitor workouts directly from your watch.'
      }
    ]
  },
  {
    slug: 'start-a-workout',
    title: 'Start a Workout',
    description: 'Everything related to launching and managing active workouts.',
    heroImage: '/app-mockup.png',
    articles: [
      {
        question: 'How do I start a workout?',
        intro: 'Begin a new session by:',
        steps: [
          'Opening the Workout tab.',
          'Tapping Start Workout for a blank session.',
          'Adding exercises as you go and logging sets.'
        ],
        outro: 'Tap Finish Workout to save the session to history.'
      },
      {
        question: 'How do I start a workout from a routine?',
        intro: 'To follow a saved template:',
        steps: [
          'Go to Workout → Routines.',
          'Select the routine you want.',
          'Tap Start Routine to load it with pre-filled exercises.'
        ]
      },
      {
        question: 'How do I add or remove exercises during a workout?',
        answer:
          'Use the Add Exercise button to insert new movements mid-session, or swipe left/right on an exercise card to remove it without affecting saved routines.'
      },
      {
        question: 'How do I log sets, reps, and weight?',
        intro: 'While inside a workout:',
        steps: [
          'Tap an exercise to expand it.',
          'Enter reps, weight, time, or distance per set.',
          'Mark each set complete to move through the list.'
        ]
      },
      {
        question: 'How do I enable RPE tracking?',
        intro: 'Turn on RPE input by:',
        steps: ['Opening Settings → Workout Preferences.', 'Switching on RPE Tracking.'],
        outro: 'A rating field now appears next to each set.'
      },
      {
        question: 'How do I pause a workout?',
        intro: 'During an active workout:',
        steps: ['Tap Pause at the top of the screen.', 'RyzaFit freezes timers and saves progress temporarily.']
      },
      {
        question: 'How do I resume a workout?',
        intro: 'To continue after pausing:',
        steps: ['Return to the Active Workout banner.', 'Tap Resume to pick up where you left off.']
      },
      {
        question: 'What happens if the app closes during a workout?',
        answer:
          'RyzaFit automatically preserves in-progress workouts. Reopen the app to resume from the Active Workout card without losing logged sets.'
      },
      {
        question: 'How do I finish and save a workout?',
        intro: 'When you are done:',
        steps: ['Tap Finish Workout.', 'Review optional notes and stats.', 'Confirm Save to push it into your history.']
      }
    ]
  },
  {
    slug: 'workout-history',
    title: 'Workout History',
    description: 'Review, edit, and reuse past training sessions.',
    heroImage: '/app-mockup.png',
    articles: [
      {
        question: 'How do I see my workout history?',
        intro: 'Browse previous workouts by:',
        steps: ['Opening Profile or History.', 'Scrolling the list sorted newest to oldest.', 'Tapping any workout for full details.']
      },
      {
        question: 'How do I view workouts by date or calendar?',
        answer:
          'Use the calendar view in History to highlight days with logged workouts. Selecting a date shows the sessions completed on that day.'
      },
      {
        question: 'How do I edit a past workout?',
        intro: 'To make corrections:',
        steps: ['Open the workout from History.', 'Tap Edit.', 'Adjust exercises, sets, reps, or notes.', 'Save the updated version.']
      },
      {
        question: 'How do I repeat or copy a past workout?',
        answer:
          'Inside any historical workout tap Repeat/Copy Workout. RyzaFit creates a new active session with the same structure so you can log it again quickly.'
      },
      {
        question: 'Can I log workouts for previous days?',
        answer:
          'Yes. From the History screen choose Log Workout, set the desired date, and enter the details to backfill your timeline.'
      },
      {
        question: 'Can I delete a workout from my history?',
        answer:
          'Open the workout, tap More (⋯), and choose Delete Workout. Confirming removes it from analytics and history permanently.'
      }
    ]
  },
  {
    slug: 'routine-generator',
    title: 'Routine Generator',
    description: 'Automate or customize training templates for your goals.',
    heroImage: '/app-mockup.png',
    articles: [
      {
        question: 'What is the Routine Generator?',
        answer:
          'The Routine Generator builds structured workouts tailored to your goals by combining your preferences, available equipment, and training frequency.'
      },
      {
        question: 'How do I generate a routine?',
        intro: 'Launch the generator by:',
        steps: ['Going to Routines → Generate Routine.', 'Answering the guided questions.', 'Previewing the recommended split and saving it.']
      },
      {
        question: 'How does my experience level affect routine generation?',
        answer:
          'Choosing beginner, intermediate, or advanced adjusts set volume, exercise complexity, and total workload to match your readiness.'
      },
      {
        question: 'How does training frequency (sessions per week) affect routine generation?',
        answer:
          'The number of sessions you select determines how the generator distributes muscle groups and recovery days across the week.'
      },
      {
        question: 'How does available equipment affect routine generation?',
        answer:
          'Listing your equipment ensures suggested exercises only include movements you can perform with that gear.'
      },
      {
        question: 'How does muscle group focus affect routine generation?',
        answer:
          'Emphasizing specific muscle groups tilts exercise selection and volume toward those priorities while keeping overall balance.'
      },
      {
        question: 'How does time available per session affect routine generation?',
        answer:
          'Setting the expected workout duration helps RyzaFit trim or expand accessory work so each routine fits your time budget.'
      },
      {
        question: 'Can I edit a generated routine?',
        answer:
          'Yes. After saving a routine you can reorder exercises, swap movements, or change set schemes without rerunning the generator.'
      },
      {
        question: 'Can I save a generated routine for later use?',
        answer:
          'Tap Save Routine at the final step to add it to your library. You can start it anytime from the Workout tab.'
      }
    ]
  },
  {
    slug: 'analytics-and-charts',
    title: 'Analytics & Charts',
    description: 'Understand performance metrics and dashboard visualizations.',
    heroImage: '/app-mockup.png',
    articles: [
      {
        question: 'Where can I see my workout analytics?',
        answer:
          'Open the Analytics tab or scroll down on your Profile dashboard to view summaries for volume, consistency, PRs, and more.'
      },
      {
        question: 'What types of charts are available?',
        bullets: [
          'Volume over time',
          'Best set performance',
          'Muscle group distribution',
          'Workout frequency and streaks',
          'Recovery and readiness indicators (Pro)'
        ]
      },
      {
        question: 'How do I pin a chart to my dashboard?',
        intro: 'To keep a chart front and center:',
        steps: ['Open the chart options menu.', 'Select Pin to Dashboard.', 'Reorder pins from the dashboard edit mode.']
      },
      {
        question: 'How do I unpin or rearrange charts?',
        answer:
          'Tap Edit on your dashboard, drag charts into the order you prefer, or tap Remove to unpin them entirely.'
      },
      {
        question: 'What do the metrics in each chart mean?',
        answer:
          'Tap the info icon (i) on any chart to learn how its metrics are calculated, what qualifies as a PR, and how often the data refreshes.'
      },
      {
        question: 'How is volume, progress, or consistency calculated?',
        answer:
          'Volume totals use sets × reps × weight for resistance work and duration for cardio. Progress compares recent averages to long-term baselines, while consistency is based on completed workouts per week.'
      }
    ]
  },
  {
    slug: 'exercise-catalog',
    title: 'Exercise Catalog',
    description: 'Search, filter, and manage exercises and favorites.',
    heroImage: '/app-mockup.png',
    articles: [
      {
        question: 'How do I search for exercises?',
        answer:
          'Use the search bar at the top of the catalog to type exercise names or keywords. Results update instantly as you type.'
      },
      {
        question: 'How do I filter exercises by muscle group or equipment?',
        answer:
          'Tap Filters to choose muscle groups, equipment, or difficulty, then apply to narrow the list to movements that match your criteria.'
      },
      {
        question: 'Where can I see the steps to perform each exercise?',
        answer:
          'Open any exercise card to view detailed instructions, cues, and coaching tips for proper execution.'
      },
      {
        question: 'Where can I see muscle activation for an exercise?',
        answer:
          'Each exercise card highlights primary and secondary muscles with interactive visuals so you know what is being trained.'
      },
      {
        question: 'How do I favorite an exercise?',
        intro: 'To keep a movement handy:',
        steps: ['Open the exercise card.', 'Tap the star icon.', 'Favorites appear in a dedicated tab for quick access.']
      },
      {
        question: 'How do I remove an exercise from favorites?',
        answer:
          'Tap the filled star again or open the Favorites tab, swipe left on the exercise, and choose Remove.'
      },
      {
        question: 'Can I create custom exercises?',
        answer:
          'Yes. Tap + Custom Exercise, enter the movement details, and save it so it appears alongside built-in options.'
      }
    ]
  },
  {
    slug: 'data-management',
    title: 'Data Management',
    description: 'Handle syncing, imports, exports, and backups.',
    heroImage: '/app-mockup.png',
    articles: [
      {
        question: 'Is my workout data saved automatically?',
        answer:
          'Completed workouts sync to the cloud automatically as soon as you finish them, so nothing is lost between devices.'
      },
      {
        question: 'Can I import workout data from other apps?',
        answer:
          'Supported importers live under Settings → Data Management. Choose the source, follow the prompts, and RyzaFit merges the data into your history.'
      },
      {
        question: 'Can I export my workout data?',
        answer:
          'Yes. Export options in Settings → Data Management let you download CSV or JSON summaries for personal backups.'
      },
      {
        question: 'How is my data synced across devices?',
        answer:
          'Sign in with the same RyzaFit account on each device. Workouts, routines, and analytics sync securely via the cloud.'
      },
      {
        question: 'What happens to my data if I log out or change devices?',
        answer:
          'Logging out removes local files, but your history stays linked to your account. Simply log back in on the new device to restore everything.'
      }
    ]
  },
  {
    slug: 'settings',
    title: 'Settings',
    description: 'Customize appearance, notifications, and workout behavior.',
    heroImage: '/app-mockup.png',
    articles: [
      {
        question: 'How do I change my theme (light, dark, system)?',
        intro: 'Update the theme by:',
        steps: ['Opening Settings → Appearance.', 'Choosing Light, Dark, or System Default.']
      },
      {
        question: 'How do I reset or redo onboarding?',
        answer:
          'In Settings → Account tap Reset Onboarding to rerun the welcome flow and adjust your initial preferences.'
      },
      {
        question: 'How do I update my profile information?',
        intro: 'To edit profile data:',
        steps: ['Go to Profile.', 'Tap Edit Profile.', 'Update fields such as name, stats, or goals.', 'Save your changes.']
      },
      {
        question: 'How do I enable or disable notifications?',
        answer:
          'Visit Settings → Notifications to toggle push alerts for reminders, streaks, and trainer messages.'
      },
      {
        question: 'How do I set up workout reminders?',
        intro: 'Create reminders by:',
        steps: ['Opening Settings → Reminders.', 'Choosing days/times.', 'Allowing notification permissions when prompted.']
      },
      {
        question: 'How do I manage Apple Watch settings?',
        answer:
          'Open the Watch app on iPhone → RyzaFit to configure complications, data sync, and workout mirroring behavior.'
      },
      {
        question: 'How do I enable or disable specific workout features (RPE, timers, etc.)?',
        answer:
          'Tweak workout options in Settings → Workout Preferences where you can toggle RPE, rest timers, warm-up defaults, and more.'
      }
    ]
  },
  {
    slug: 'legal',
    title: 'Legal',
    description: 'Policies that govern how RyzaFit works.',
    heroImage: '/app-mockup.png',
    articles: [
      {
        question: 'Terms of Service',
        intro: 'Please read these Terms and Conditions carefully before using any of our services. Key excerpts are summarized below.',
        sections: [
          {
            heading: 'Fitness & Health Disclaimer',
            paragraphs: [
              'RyzaFit is designed to help you log workouts, track fitness activity, and view training information for general educational purposes.',
              'RyzaFit does not provide medical advice, diagnosis, or treatment. Workouts, routines, analytics, and recommendations are not a substitute for professional medical guidance.',
              'Consult a qualified healthcare professional before beginning any exercise program—especially if you have medical conditions, injuries, or health concerns.'
            ],
            bullets: [
              'You are solely responsible for your health, safety, and physical condition while using the app.',
              'Any exercise you perform is done at your own risk.',
              'RyzaFit, its creators, and affiliates are not liable for injuries, health issues, or damages resulting from use or misuse of the app.'
            ],
            outro: 'If you experience pain, discomfort, dizziness, or concerning symptoms while exercising, stop immediately and seek medical advice.'
          },
          {
            heading: 'Subscriptions & Billing',
            paragraphs: [
              'RyzaFit offers optional paid subscriptions (RyzaFit Pro) for additional features.',
              'Subscription plans can be monthly or yearly. Pricing and availability are shown in-app and may vary by region.',
              'All payments are processed securely through your Apple App Store account; RyzaFit never stores payment information.',
              'Payment is charged to your Apple ID at purchase. Subscriptions renew automatically unless canceled at least 24 hours before the current period ends, with renewal charges occurring within 24 hours of expiration.'
            ],
            bullets: ['Manage or cancel anytime via iOS Settings → Apple ID → Subscriptions.', 'Deleting the app does not cancel your subscription.'],
            outro:
              'If a free trial is offered, unused portions are forfeited upon purchase. RyzaFit may change pricing or plans within App Store policies. All refunds are handled by Apple; RyzaFit does not issue refunds directly.'
          },
          {
            heading: 'User Accounts & Data',
            paragraphs: [
              'A RyzaFit account is required for certain features. You are responsible for keeping credentials secure and for all activity under your account.',
              'Provide accurate, current information when creating or updating your account; RyzaFit is not responsible for losses from unauthorized access.',
              'RyzaFit collects workout data, preferences, and account info to deliver syncing, analytics, and personalization. Data practices are detailed in the Privacy Policy.',
              'Data may be stored locally and/or synced securely across devices. While RyzaFit takes reasonable measures to protect data, no system is completely secure.',
              'Workout data, analytics, and recommendations are provided “as is” and may contain errors or delays; uninterrupted access is not guaranteed.',
              'RyzaFit may suspend or terminate accounts that violate the Terms or misuse the app. You can stop using RyzaFit anytime. Account deletion and data removal options are described in-app or within the Privacy Policy.'
            ]
          }
        ]
      },
      {
        question: 'Where can I find RyzaFit’s Privacy Policy?',
        answer:
          'Open Settings → Legal → Privacy Policy or visit ryzafit.com/legal/privacy to learn how your data is collected and protected.'
      }
    ]
  },
  {
    slug: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Payments, crashes, and other issues.',
    heroImage: '/app-mockup.png',
    articles: [
      {
        section: 'Payments',
        question: 'How do I upgrade to RyzaFit Pro?',
        intro: 'Upgrade by:',
        steps: ['Opening Settings → Upgrade to Pro.', 'Choosing monthly or yearly.', 'Confirming the purchase through the App Store.']
      },
      {
        section: 'Payments',
        question: 'How are payments processed?',
        answer: 'All billing flows through Apple’s App Store infrastructure; RyzaFit never stores your payment credentials.'
      },
      {
        section: 'Payments',
        question: 'How do I cancel my subscription?',
        answer:
          'Manage or cancel via iOS Settings → Apple ID → Subscriptions. Changes apply at the end of the current billing cycle.'
      },
      {
        section: 'Payments',
        question: 'Why was my payment declined?',
        answer:
          'Apple may decline cards because of bank restrictions, insufficient funds, or expired details. Update payment info in your Apple ID and try again.'
      },
      {
        section: 'Payments',
        question: 'How do I restore a previous purchase?',
        intro: 'If you reinstalled the app:',
        steps: ['Go to Settings → Upgrade to Pro.', 'Tap Restore Purchases to sync entitlement from Apple.']
      },
      {
        section: 'Crashes & Performance',
        question: 'What should I do if the app crashes?',
        answer:
          'Force-quit and reopen RyzaFit to continue. Ensure you are on the latest version from the App Store for the newest fixes.'
      },
      {
        section: 'Crashes & Performance',
        question: 'What happens if the app crashes during a workout?',
        answer:
          'In-progress workouts auto-save locally. Reopen the app and tap Resume Workout to continue without re-entering sets.'
      },
      {
        section: 'Crashes & Performance',
        question: 'How do I report a bug or issue?',
        answer:
          'Visit Settings → Help → Report a Bug to send logs and screenshots directly to the team.'
      },
      {
        section: 'Crashes & Performance',
        question: 'How can I improve app performance?',
        answer:
          'Keep your device OS updated, close unused apps, download the latest RyzaFit build, and ensure adequate storage for caching media.'
      }
    ]
  },
  {
    slug: 'support',
    title: 'Support',
    description: 'Ways to reach our team and share feedback.',
    heroImage: '/app-mockup.png',
    articles: [
      {
        question: 'How do I contact support?',
        answer:
          'Use the in-app Help → Contact Support form or email support@ryzafit.com for personalized assistance.'
      },
      {
        question: 'Where can I submit feedback or feature requests?',
        answer:
          'Tap Help → Feedback to send suggestions directly to the product team or join our community portal to vote on ideas.'
      },
      {
        question: 'How do I report an incorrect exercise or data issue?',
        answer:
          'Open the exercise or workout, tap Report Issue, describe the problem, and we will review and correct it promptly.'
      }
    ]
  }
];
