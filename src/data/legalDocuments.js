export const legalDocuments = {
  terms: {
    key: 'terms',
    title: 'Terms & Conditions',
    route: '/faq/termsandconditions',
    lastUpdated: 'Insert Date',
    summary:
      'Please read these Terms & Conditions carefully before using RyzaFit. By accessing the mobile application or related services you agree to be bound by these Terms, and if you do not agree, do not use the Service.',
    sections: [
      {
        heading: 'Eligibility & Acceptance',
        paragraphs: [
          'You must be at least 13 years old (or the minimum legal age in your jurisdiction) to use RyzaFit.',
          'By using the Service, you represent that you are legally capable of entering into a binding agreement.'
        ]
      },
      {
        heading: 'Fitness & Health Disclaimer',
        paragraphs: [
          'RyzaFit is designed to help users log workouts, track fitness activity, and view training information for general educational and informational purposes only.',
          'RyzaFit does not provide medical advice, diagnosis, or treatment. Any workouts, routines, analytics, insights, or recommendations in the app are not a substitute for professional medical guidance.',
          'Consult a qualified healthcare professional before beginning any exercise program, especially if you have medical conditions, injuries, or health concerns.',
          'If you experience pain, dizziness, discomfort, or concerning symptoms, stop immediately and seek medical advice.'
        ],
        bullets: [
          'You are solely responsible for your health, safety, and physical condition while using the app.',
          'Any exercise you perform is done at your own risk.',
          'RyzaFit, its creators, and affiliates are not liable for injuries, health issues, or damages resulting from the use or misuse of the Service.'
        ]
      },
      {
        heading: 'Accounts & User Responsibilities',
        paragraphs: [
          'Certain features of RyzaFit require an account, and you are responsible for maintaining the confidentiality of your login credentials.',
          'You agree to provide accurate and current information when creating or updating your account, and RyzaFit is not responsible for losses from unauthorized access caused by failure to secure credentials.',
          'RyzaFit reserves the right to suspend or terminate accounts that violate these Terms or misuse the Service.'
        ],
        bullets: ['Maintaining the confidentiality of your login credentials.', 'All activity that occurs under your account.']
      },
      {
        heading: 'Subscriptions & Billing',
        paragraphs: [
          'RyzaFit offers optional paid subscriptions (RyzaFit Pro) that unlock additional features. Subscriptions may be offered monthly or yearly, pricing is shown in-app, and payments are processed securely through your Apple App Store account.',
          'Payments are charged to your Apple ID at confirmation of purchase and renew automatically unless canceled at least 24 hours before the end of the current billing period.',
          'Renewal charges occur within 24 hours prior to the end of the current period, and deleting the app does not cancel an active subscription.',
          'If a free trial is offered, any unused portion is forfeited upon purchase. RyzaFit may change pricing or plans in line with App Store policies, and all refunds are handled by Apple.'
        ],
        bullets: [
          'Manage or cancel subscriptions via iOS Settings → Apple ID → Subscriptions.',
          'RyzaFit does not store or process payment information.',
          'All refund requests must be handled through Apple.'
        ]
      },
      {
        heading: 'Data & Service Availability',
        paragraphs: [
          'RyzaFit collects workout data, preferences, and account information to support syncing, analytics, and personalization. Details on data handling are provided in the Privacy Policy.',
          'Data may be stored locally on your device and/or synced securely across supported devices, but no system is completely secure and uninterrupted access is not guaranteed.',
          'Workout data, analytics, and recommendations are provided "as is" and may contain errors, inaccuracies, or delays.'
        ]
      },
      {
        heading: 'Acceptable Use',
        paragraphs: ['You agree not to misuse the Service or attempt to interfere with its operation.'],
        bullets: [
          'Do not use the Service for unlawful purposes.',
          'Do not attempt to interfere with, disrupt, or exploit the Service.',
          'Do not circumvent paywalls, subscriptions, or security features.',
          'Do not reverse engineer, scrape, or abuse the app or backend systems.'
        ],
        outro: 'Violation of these rules may result in account suspension or termination.'
      },
      {
        heading: 'Disclaimer of Warranties',
        paragraphs: [
          'RyzaFit is provided on an "as is" and "as available" basis.',
          'To the fullest extent permitted by law, RyzaFit disclaims all warranties, express or implied, including but not limited to accuracy, reliability, availability, or fitness for a particular purpose.'
        ]
      },
      {
        heading: 'Limitation of Liability',
        paragraphs: [
          'RyzaFit, its creators, and affiliates are not liable for any indirect, incidental, consequential, or special damages arising from or related to use of the Service, including data loss, injuries, or financial loss.',
          'If liability is found, it is limited to the amount paid for the Service during the preceding 12 months, or zero for free users.'
        ]
      },
      {
        heading: 'Termination',
        paragraphs: [
          'You may stop using RyzaFit at any time.',
          'RyzaFit reserves the right to suspend or terminate access to the Service, with or without notice, if you violate these Terms or misuse the app. Account deletion and data removal options are available in-app or detailed in the Privacy Policy.'
        ]
      },
      {
        heading: 'Changes to These Terms',
        paragraphs: [
          'RyzaFit may update these Terms from time to time. Changes will be posted on the website or within the app, and continued use of the Service after changes become effective constitutes acceptance of the updated Terms.'
        ]
      },
      {
        heading: 'Governing Law',
        paragraphs: [
          'These Terms are governed by and construed in accordance with the laws of the applicable jurisdiction without regard to conflict-of-law principles.'
        ]
      },
    ],
    contactNote: 'Questions about these Terms & Conditions? Email support@ryzafit.com.'
  },
  privacy: {
    key: 'privacy',
    title: 'Privacy Policy',
    route: '/faq/privacypolicy',
    lastUpdated: 'Insert Date',
    summary:
      'RyzaFit respects your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use the RyzaFit mobile application and related services.',
    sections: [
      {
        heading: 'Information We Collect',
        paragraphs: ['We collect only the information necessary to provide and improve the Service.'],
        sections: [
          {
            heading: 'Account Information',
            paragraphs: ['When you create an account, we may collect your email address, user identifier, and securely handled authentication credentials.']
          },
          {
            heading: 'Fitness & Workout Data',
            paragraphs: [
              'We collect fitness-related data you choose to log, including exercises, sets, reps, weights, workout history, training preferences, and analytics derived from logged activity.',
              'This data is used solely to provide tracking, insights, and personalization within the app.'
            ]
          },
          {
            heading: 'Usage & Performance Data',
            paragraphs: ['We may collect limited technical data such as app usage events, crash reports, and session information to improve performance, stability, and user experience.']
          },
          {
            heading: 'Subscription Information',
            paragraphs: ['Subscription status is managed by Apple. RyzaFit does not store payment or billing details.']
          }
        ]
      },
      {
        heading: 'Health Data',
        paragraphs: [
          'RyzaFit may integrate with Apple HealthKit, subject to your explicit permission.',
          'Health data is accessed only with user consent, used solely to provide app functionality, and is not shared with third parties for advertising or marketing.'
        ],
        sections: [
          {
            heading: 'Apple Watch & Heart Rate Data',
            paragraphs: [
              'If you choose to connect an Apple Watch, RyzaFit may access certain health data through Apple HealthKit, including heart rate data recorded during workout sessions.',
              'This data is accessed only with your explicit permission and is used solely to display workout metrics, enhance tracking, and provide insights.',
              'RyzaFit does not collect heart rate data outside of active workout sessions and does not use this data for advertising, marketing, or tracking purposes.',
              'Health data accessed via Apple Watch and HealthKit is not sold or shared with third parties. You may revoke HealthKit permissions at any time via device settings.'
            ]
          }
        ]
      },
      {
        heading: 'How We Use Your Information',
        bullets: [
          'Provide and operate the Service.',
          'Sync data across devices.',
          'Generate workout analytics and insights.',
          'Personalize user experience.',
          'Respond to support requests.',
          'Improve app functionality and reliability.'
        ],
        outro: 'We do not sell user data.'
      },
      {
        heading: 'Data Storage & Security',
        paragraphs: [
          'Data may be stored locally on your device and/or synced securely to cloud services to support backups and multi-device access.',
          'RyzaFit implements reasonable safeguards to protect your information, but no system can guarantee absolute security.'
        ]
      },
      {
        heading: 'Data Sharing & Third Parties',
        paragraphs: [
          'RyzaFit does not sell personal data.',
          'We may share data only with service providers necessary to operate the app, to comply with legal obligations, or to protect the rights, safety, or integrity of RyzaFit and its users.',
          'All third parties are required to process data in accordance with applicable privacy laws.'
        ]
      },
      {
        heading: 'Analytics & Crash Reporting',
        paragraphs: [
          'We may use privacy-focused analytics and crash reporting tools to diagnose issues, improve stability, and understand feature usage.',
          'These tools collect aggregated or pseudonymous data and are not used for advertising tracking.'
        ]
      },
      {
        heading: 'Data Retention',
        paragraphs: [
          'We retain personal data only as long as necessary to provide the Service, comply with legal obligations, or resolve disputes.',
          'When an account is deleted, associated personal data is deleted or anonymized within a reasonable timeframe, though some limited data may be retained as required by law or for legitimate business purposes.'
        ]
      },
      {
        heading: 'Your Rights & Choices',
        paragraphs: [
          'Depending on your location, you may have rights to access, correct, or delete personal data and withdraw consent where applicable.',
          'Account deletion options are available in-app or through contacting support.'
        ]
      },
      {
        heading: 'Children’s Privacy',
        paragraphs: [
          'RyzaFit is not intended for children under 13 years of age (or the minimum age required in your jurisdiction).',
          'We do not knowingly collect personal data from children, and if you believe a child has provided personal data, please contact us so we can take appropriate action.'
        ]
      },
      {
        heading: 'International Users',
        paragraphs: [
          'RyzaFit may process data on servers located outside your country of residence. By using the Service, you consent to the transfer and processing of data in accordance with this Privacy Policy.'
        ]
      },
      {
        heading: 'Changes to This Privacy Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. Changes will be posted on our website or within the app, and continued use after changes become effective constitutes acceptance of the updated policy.'
        ]
      }
    ],
    contactNote: 'Privacy questions? Contact support@ryzafit.com.'
  },
  eula: {
    key: 'eula',
    title: 'End User License Agreement',
    route: '/faq/eula',
    lastUpdated: 'Insert Date',
    summary:
      'This End User License Agreement is a legal agreement between you and RyzaFit governing your use of the RyzaFit mobile application and related software, content, and updates.',
    sections: [
      {
        heading: 'License Grant',
        paragraphs: [
          'Subject to your compliance with this Agreement and the RyzaFit Terms & Conditions, RyzaFit grants you a limited, non-exclusive, non-transferable, revocable license to download and use the App for personal, non-commercial purposes on Apple-branded devices you own or control.',
          'All rights not expressly granted are reserved by RyzaFit.'
        ]
      },
      {
        heading: 'License Restrictions',
        bullets: [
          'Copy, modify, or create derivative works of the App.',
          'Reverse engineer, decompile, disassemble, or attempt to extract the source code.',
          'Rent, lease, sell, sublicense, or redistribute the App.',
          'Circumvent, disable, or interfere with security or subscription features.',
          'Use the App for unlawful or unauthorized purposes.'
        ],
        outro: 'Any attempt to violate these restrictions may result in termination of your license.'
      },
      {
        heading: 'Ownership & Intellectual Property',
        paragraphs: [
          'The App, including code, design, features, graphics, icons, text, animations, trademarks, and logos, is owned by RyzaFit and protected by intellectual property laws.',
          'This Agreement does not grant ownership interest in the App. You retain ownership of data you input, subject to the Privacy Policy.'
        ]
      },
      {
        heading: 'Updates & Changes',
        paragraphs: [
          'RyzaFit may provide updates, patches, enhancements, or modifications to the App, which are licensed to you under this Agreement unless accompanied by a separate license.',
          'RyzaFit may modify or discontinue the App or any feature at any time without liability.'
        ]
      },
      {
        heading: 'Third-Party Services & Apple Terms',
        paragraphs: [
          'Your use of the App is subject to applicable third-party terms, including Apple’s App Store Terms of Service.',
          'RyzaFit is solely responsible for the App. Apple has no obligation to provide maintenance or support services.'
        ]
      },
      {
        heading: 'Health & Fitness Disclaimer',
        paragraphs: [
          'The App is intended for fitness tracking and informational purposes only and does not provide medical advice, diagnosis, or treatment.',
          'Exercise or activity performed using the App is at your own risk, and you are solely responsible for your health and physical condition. RyzaFit is not liable for injuries or damages resulting from use of the App.'
        ]
      },
      {
        heading: 'Disclaimer of Warranties',
        paragraphs: [
          'The App is provided on an "as is" and "as available" basis. RyzaFit disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.',
          'RyzaFit does not warrant that the App will be error-free, secure, or available at all times.'
        ]
      },
      {
        heading: 'Limitation of Liability',
        paragraphs: [
          'RyzaFit is not liable for indirect, incidental, consequential, or special damages arising out of or related to use of the App.',
          'RyzaFit’s total liability is limited to the amount paid for the App during the preceding 12 months, or zero for free users.'
        ]
      },
      {
        heading: 'Termination',
        paragraphs: [
          'This Agreement is effective until terminated. RyzaFit may terminate the license immediately if you violate its terms.',
          'Upon termination you must stop using the App and delete all copies. Termination does not limit RyzaFit’s other rights or remedies.'
        ]
      },
      {
        heading: 'Governing Law',
        paragraphs: ['This Agreement is governed by the laws of the applicable jurisdiction without regard to conflict-of-law principles.']
      }
    ],
    contactNote: 'For licensing questions, email support@ryzafit.com.'
  }
};
