export const preparedAssessment = {
  "id": "r6rKQSfGpt0S2P6Md1Wi8aivEBAWDEJt",
  "isCompleted": false,
  "questions": [
    {
      "id": "ArCCjSAArQ",
      "text": "Product Assortment",
      "description": "Maintaining different versions/packages of your product prevents small customers from being overwhelmed by features/options, while allowing enterprise customers to pay for the features they need.",
      "question": "Which best describes your product assortment?",
      "comment": null,
      "choices": [
        {
          "id": "1a",
          "text": "No packages or plans; each customer has access to the exact same functionality.",
          "recommendation": "Your next step is to create plans that allow pricing assortment through usage.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 1,
          "__typename": "Choice"
        },
        {
          "id": "1b",
          "text": "Plans are differentiated exclusively on the amount of usage, not by feature-gating.",
          "recommendation": "Your next step is to provide 2 or more plans that that allow pricing assortment through feature-gating.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 2,
          "__typename": "Choice"
        },
        {
          "id": "1c",
          "text": "Two or more packages/options are defined by different features  (i.e., with and without enterprise features).",
          "recommendation": "Your next step is to provide multiple plans that provide visibility into features that are not available (but could be with an upgrade), while keeping a less-complex experience for non-enterprise customers.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 3,
          "__typename": "Choice"
        },
        {
          "id": "1d",
          "text": "Additional premium features are exposed in the UI, to provide visibility into upgrade benefits and new features.",
          "recommendation": "Perfect! Having different packages for different buying segments, specifically packages for enterprise customers, makes you one step closer to being EnterpriseReady!",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 4,
          "__typename": "Choice"
        }
      ],
      "__typename": "Question"
    },
    {
      "id": "9oyGcxfnQj",
      "text": "Team Management",
      "description": "Collaboration among teams is a core component of modern applications.",
      "question": "Which best describes your application’s approach to collaboration and team management?",
      "comment": null,
      "choices": [
        {
          "id": "2a",
          "text": "Application is designed to be used by a single user.",
          "recommendation": "Your next step is to allow users to invite others to their team or organization.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 1,
          "__typename": "Choice"
        },
        {
          "id": "2b",
          "text": "Users can invite others to join their account, but there is minimal support for teams or methods of role-based collaboration.",
          "recommendation": "Your next step is to allow users to create and manage teams while allowing admins to reating some policy control over the process.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 2,
          "__typename": "Choice"
        },
        {
          "id": "2c",
          "text": "User can create and manage teams and invite others to join, with admins retaining some policy control over the process.",
          "recommendation": "Your next step is to allow users to belong to multiple teams that is managed by a parent organization.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 3,
          "__typename": "Choice"
        },
        {
          "id": "2d",
          "text": "Users can belong to multiple teams created by a parent organization, which also manages policies over who is allowed to join teams.",
          "recommendation": "Great work! By having a full suite of Team Management features you are one step closer to being EnterpriseReady!",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 4,
          "__typename": "Choice"
        }
      ],
      "__typename": "Question"
    },
    {
      "id": "V1KOIDXRuQ",
      "text": "Role-based Access Control",
      "description": "Role-based Access Control enables certain users to have more/less privileged access to certain data or information.",
      "question": "Which best describes your RBAC implementation?",
      "comment": null,
      "choices": [
        {
          "id": "3a",
          "text": "Application does not have roles; all users have the same functionality.",
          "recommendation": "Your next step is to create basic roles such as admin vs. user or read/write vs. read.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 1,
          "__typename": "Choice"
        },
        {
          "id": "3b",
          "text": "Basic roles (e.g., admin/user, or read/write vs. read-only) are available.",
          "recommendation": "Your next step is to assign multiple roles to a user; users without access to certain features should be prompted with messaging.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 2,
          "__typename": "Choice"
        },
        {
          "id": "3c",
          "text": "Customers can assign 4-5 predefined roles to users. Users without access to features see clear messaging about permission enforcement if they attempt to use those features.",
          "recommendation": "Your next step is to allow users to create custom roles with granular controls.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 3,
          "__typename": "Choice"
        },
        {
          "id": "3d",
          "text": "Customers can create custom roles with granular controls.",
          "recommendation": "Awesome! By providing your customers with role-based access control features, you are one step closer to being EnterpriseReady!",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 4,
          "__typename": "Choice"
        }
      ],
      "__typename": "Question"
    },
    {
      "id": "ZLoR6l06Hv",
      "text": "Audit Logging",
      "description": "Audit logs provide admins with a record of the events that their users took inside your application, generally used for security incident management.",
      "question": "Which best describes your product’s audit-logging capabilities?",
      "comment": null,
      "choices": [
        {
          "id": "4a",
          "text": "There is no audit log in our application, but we do have system logs.",
          "recommendation": "Your next step is to allow customers to request and export an audit log from your company on an ad hoc basis.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 1,
          "__typename": "Choice"
        },
        {
          "id": "4b",
          "text": "Customers can request an export of an audit log from our team, on an ad hoc basis.",
          "recommendation": "Your next step is to allow admins to view a list of audit events in a web UI and export them to a CSV.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 2,
          "__typename": "Choice"
        },
        {
          "id": "4c",
          "text": "Admins can view a list of audit events in a web UI and export them via CSV.",
          "recommendation": "Your next step is to have an audit UI (with search/sort/export) as well as API access with a bearer token.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 3,
          "__typename": "Choice"
        },
        {
          "id": "4d",
          "text": "Admins have an audit UI (with search/sort/export), as well as token-based, ETag-enabled API access to retrieve events from an immutable audit log.",
          "recommendation": "Fantastic! Having a full immutable audit log for customers makes you one step closer to being EnterpriseReady!",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 4,
          "__typename": "Choice"
        }
      ],
      "__typename": "Question"
    },
    {
      "id": "Wacop5KeeJ",
      "text": "Deployment Options",
      "description": "Customers often have data classifications that control where they can store sensitive and confidential data. Different deployment options give customers a choice on where their data is stored.",
      "question": "Which best describes your deployment options?",
      "comment": null,
      "choices": [
        {
          "id": "5a",
          "text": "Customers only have access to our multitenant SaaS.",
          "recommendation": "Your next step is to provide an option for a single-tenant version.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 1,
          "__typename": "Choice"
        },
        {
          "id": "5b",
          "text": "We provide an option for a single-tenant version that we manage for each customer.",
          "recommendation": "Your next step is to provide an option for customers to install a private instance into infrastructure they control.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 4,
          "__typename": "Choice"
        },
        {
          "id": "5c",
          "text": "We provide an option for customers to install a private instance onto infrastructure they control (private cloud or datacenter), often called “on-prem.”",
          "recommendation": "Your next step is provide a full enterprise-installable version that integrates with traditional on-prem enterprise systems (LDAP/AD, backups, airgap capability, updates, customer configuration).",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 6,
          "__typename": "Choice"
        },
        {
          "id": "5d",
          "text": "We provide a full enterprise-installable version that integrates with traditional on-prem enterprise systems (e.g., LDAP/AD, backups, airgap-capable, updates, custom configuration).",
          "recommendation": "Yes! By allowing your customers to deploy a full enterprise-installable version of your application on-prem, you are one step closer to being EnterpriseReady!",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 8,
          "__typename": "Choice"
        }
      ],
      "__typename": "Question"
    },
    {
      "id": "xk2iGjzAFA",
      "text": "SSO",
      "description": "Enabling enterprise customers to manage user-level access to your application via their existing user directory can be a key to enterprise adoption.",
      "question": "Which best describes your single sign-on options?",
      "comment": null,
      "choices": [
        {
          "id": "6a",
          "text": "Customers must login with a username/password.",
          "recommendation": "Your next step is to let customers login with Google Auth, GitHub, Salesforce, etc.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 1,
          "__typename": "Choice"
        },
        {
          "id": "6b",
          "text": "Users can authenticate with Google Auth, GitHub, Salesforce or other federated ID.",
          "recommendation": "Your next step is it integrate with a full-service SAML-based authentication system.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 2,
          "__typename": "Choice"
        },
        {
          "id": "6c",
          "text": "Customers can integrate with a full self-service SAML-based authentication system and enforce its usage.",
          "recommendation": "Your next step is to allow customers to manage the provisioning of users with the SCIM protocol, as well as authenticate with SAML.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 3,
          "__typename": "Choice"
        },
        {
          "id": "6d",
          "text": "Customers can manage the provisioning of users with the SCIM protocol as well as authenticate with SAML.",
          "recommendation": "Great! By allowing your customers to easily manage their users, you are one step closer to being EnterpriseReady!",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 4,
          "__typename": "Choice"
        }
      ],
      "__typename": "Question"
    },
    {
      "id": "Z2mzLcVaqR",
      "text": "Support/SLA",
      "description": "Providing enterprises with guarantees for uptime, responsiveness and other special contractual requirements is often a key to gaining their trust.",
      "question": "Which description best describes your support/SLA options?",
      "comment": null,
      "choices": [
        {
          "id": "7a",
          "text": "All customers, regardless of size, get the same TOS, SLA and best-effort support.",
          "recommendation": "Your next step is to publish an SLA and support hours on your website.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 1,
          "__typename": "Choice"
        },
        {
          "id": "7b",
          "text": "There is a published SLA and support hours. Customers are given specific channels for support (e.g., email, chat, phone).",
          "recommendation": "Your next step is to allow enterprise customers 24/7/365 support for critical issues, and view their current and close tickets from your ticketing system.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 2,
          "__typename": "Choice"
        },
        {
          "id": "7c",
          "text": "Enterprise contracts allow for non-standard TOS. 24/7/365 support for critical issues is available.",
          "recommendation": "Your next step is to provide a dedicated account manager who thinks through enterprise customers’ problems and helps them adopt and manage the product.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 3,
          "__typename": "Choice"
        },
        {
          "id": "7d",
          "text": "Enterprises have access to a dedicated account manager who analyzes their problems and helps them optimize their use of the product.",
          "recommendation": "Excellent! You're providing a high level of trust to enterprise customers, making you one step closer to being EnterpriseReady!",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 4,
          "__typename": "Choice"
        }
      ],
      "__typename": "Question"
    },
    {
      "id": "wxHCIAtokc",
      "text": "Integrations",
      "description": "Enterprises have a variety of existing workflows, systems and tools that your application will need to interact with.",
      "question": "Which best describes your integration options?",
      "comment": null,
      "choices": [
        {
          "id": "8a",
          "text": "Our customers don't have access to integrate our application with other applications.",
          "recommendation": "Your next step is to let admins integrate with other applications they use (e.g., Slack, Jira, Zendesk, Salesforce, etc.).",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 1,
          "__typename": "Choice"
        },
        {
          "id": "8b",
          "text": "Our customer's admins can integrate with common applications (i.e., Slack, Jira, Zendesk, Salesforce, etc.).",
          "recommendation": "Your next step is to allow integration with Oracle, SAP and other enterprise products.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 2,
          "__typename": "Choice"
        },
        {
          "id": "8c",
          "text": "Our application allows customers to integrate with advanced enterprise products (i.e., Oracle, SAP, etc.).",
          "recommendation": "Your next step is to allow users to create custom integrations.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 3,
          "__typename": "Choice"
        },
        {
          "id": "8d",
          "text": "Our customers can create custom (PS-style) integrations.",
          "recommendation": "Classic! By having a variety of existing workflows, systems, and tools that your application can interact with makes you one step closer to being EnterpriseReady!",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 4,
          "__typename": "Choice"
        }
      ],
      "__typename": "Question"
    },
    {
      "id": "fS10auu4Zj",
      "text": "Change Management",
      "description": "Most enterprises have specific workflows and approval processes that must be completed to enact changes, and the software that they use must enable the enforcement of those processes.",
      "question": "Which best describes your change-management features?",
      "comment": null,
      "choices": [
        {
          "id": "9a",
          "text": "No change-management features are available in our application.",
          "recommendation": "Your next step is to provide collateral and admin control over when new features are made available to users.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 1,
          "__typename": "Choice"
        },
        {
          "id": "9b",
          "text": "We provide collateral and some administrative control over when major new features are made available to users.",
          "recommendation": "Your next step is to provide customers with a sandbox environment to test out new features.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 2,
          "__typename": "Choice"
        },
        {
          "id": "9c",
          "text": "We provide sandbox accounts or environments, where changes can be tested before being applied to the production account/environment.",
          "recommendation": "Your next step is to provide a sandbox environment that allows admins to promote changes from the sandbox environment to production",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 3,
          "__typename": "Choice"
        },
        {
          "id": "9d",
          "text": "We provide workflows that require a defined approval process before changes to critical settings/content can be applied.",
          "recommendation": "Grand! Allowing your enterprise customers to have specific workflows and processes to enact changes makes your application one step closer to being EnterpriseReady!",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 4,
          "__typename": "Choice"
        }
      ],
      "__typename": "Question"
    },
    {
      "id": "ELKRlzga1l",
      "text": "Reporting",
      "description": "A mechanism for extracting value from the data your application generates helps enterprise customers achieve specific business objectives, and justifies the cost of your application by proving some amount of ROI.",
      "question": "Which best describes your product's reporting capabilities?",
      "comment": null,
      "choices": [
        {
          "id": "10a",
          "text": "There is no reporting.",
          "recommendation": "Your next step is to allow customers to view a few charts and export certain usage data.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 1,
          "__typename": "Choice"
        },
        {
          "id": "10b",
          "text": "Customers can view predefined charts and can export data.",
          "recommendation": "Your next step is to allow customers to create custom reports that can be delivered on a schedule they create.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 2,
          "__typename": "Choice"
        },
        {
          "id": "10c",
          "text": "Customers can create custom reports.",
          "recommendation": "Your next step is to allow customers to access analytics and use past data to predict the future.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 3,
          "__typename": "Choice"
        },
        {
          "id": "10d",
          "text": "Customers have access to advanced and/or predictive analytics.",
          "recommendation": "Extraordinary! Reporting allows enterprise customers to extract value and achieve business objectives; you are now one step closer to being EnterpriseReady!",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 4,
          "__typename": "Choice"
        }
      ],
      "__typename": "Question"
    },
    {
      "id": "T2ocAbIjoL",
      "text": "Security",
      "description": "Security is a fundamental and broad topic for SaaS applications. Beyond compliance and earning the trust of enterprise customers, breaches threaten the viability of a company.",
      "question": "Which best describes your product’s security practices?",
      "comment": null,
      "choices": [
        {
          "id": "11a",
          "text": "We encrypt all the things, store secrets safely, practice least privilege and have endpoint security in place.",
          "recommendation": "Your next step is to have a bug bounty program alongside a security page that details out the security protocols you follow.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 1,
          "__typename": "Choice"
        },
        {
          "id": "11b",
          "text": "We automate patches, implement static code analysis, and conduct regular pen tests, threat modeling and security training.",
          "recommendation": "Your next step is to have completed the required SOC2 audits, and make sure your product meets all requirement from enterprise buyers.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 2,
          "__typename": "Choice"
        },
        {
          "id": "11c",
          "text": "We have a bug bounty program, /security page and regularly fill out vendor security questionnaires.",
          "recommendation": "Your next step is to reach for ISO compliance, as well as perform continuous security training.",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 3,
          "__typename": "Choice"
        },
        {
          "id": "11d",
          "text": "We have completed required ISO 27000 or similar certifications.",
          "recommendation": "Phenomenal! Security is fundamental, breaches threaten the viability of an enterprise, by following security protocols you are one step closer to being EnterpriseReady!",
          "recommendationPublic": "",
          "isSelected": false,
          "weight": 4,
          "__typename": "Choice"
        }
      ],
      "__typename": "Question"
    }
  ],
  "__typename": "Assessment"
}
