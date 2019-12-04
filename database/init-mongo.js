db.createUser(
  {
    user: "admin",
    pwd: "admin",
    roles: [
      {
        role: "root",
        db: "admin"
      }
    ]
  }
)
db.createUser(
  {
    user: "ermes_api_funnel",
    pwd: "ermes_api_funnel",
    roles: [
      {
        role: "readWrite",
        db: "ermes_funnel"
      }
    ]
  }
)
db.getCollection('funnels').insertOne({
  _id: ObjectId("111111111111111111111111"),
  userId: ObjectId("111111111111111111111111"),
  name: 'funnel_test',
  saved: true,
  start: '2019-08-01T21:59:59.999Z',
  end: '2019-04-01T21:59:59.999Z',
  connected: [
    {
      "funnelId": "CPM",
      "connector": {
        "id": 6,
        "name": "Google Play",
        "src": "/assets/img/connector/google_play.png",
        "sso": true
      },
      "data": {},
      "fetched": true
    },
    {
      "funnelId": "CPV",
      "connector": {
        "id": 6,
        "name": "Google Play",
        "src": "/assets/img/connector/google_play.png",
        "sso": true
      },
      "data": {},
      "childId": [
        "CPE",
        "CPO",
        "CPOHB"
      ],
      "fetched": true
    },
    {
      "funnelId": "CPOHB",
      "connector": {
        "id": 6,
        "name": "Google Play",
        "src": "/assets/img/connector/google_play.png",
        "sso": true
      },
      "data": {},
      "fetched": true
    },
    {
      "funnelId": "CPE",
      "connector": {
        "id": 6,
        "name": "Google Play",
        "src": "/assets/img/connector/google_play.png",
        "sso": true
      },
      "data": {},
      "fetched": true
    },
    {
      "funnelId": "CPO",
      "connector": {
        "id": 6,
        "name": "Google Play",
        "src": "/assets/img/connector/google_play.png",
        "sso": true
      },
      "data": {},
      "fetched": true
    }
  ],
  objectifed: [
    {
      "funnelId": "CPM",
      "value": "1.00"
    },
    {
      "funnelId": "CPV",
      "value": "2.00"
    },
    {
      "funnelId": "CPE",
      "value": "3.00"
    },
    {
      "funnelId": "CPO",
      "value": "4.00"
    }
  ],
  measure: {
    "name": "Leads",
    "description": "Analysez l’impact de vos campagnes médias sur vos nouveaux leads et augmentez votre taux d’acquisition",
    "preview": "/static/img/preview/leads-preview.png",
    "details": [
      "Impressions",
      "Visites Homepage",
      "Engagements",
      "Offres"
    ],
    "baseline": {
      "wording": {
        "total": "Offres au total",
        "advertising_title": "Nombre d'offres provenant de la campagne.",
        "advertising_description": "(Ce sont les nouvelles offres obtenues grâce à votre campagne média)",
        "baseline_title": "Nombre d'offres provenant du trafic natuel.",
        "baseline_description": "(C'est le nombre de nouvelles offres que vous auriez eu sans campagne média)",
        "kpi_title": "CPO hors baseline.",
        "pki_description": "(Correspond au coût pour chaque nouvelle offre provenant de la campagne uniquement)"
      }
    },
    "funnels": [
      {
        "id": "CPM",
        "name": "Impressions publicitaires ciblées",
        "title": "CPM",
        "per": 1000,
        "cr": false,
        "average": 2.6,
        "connectors": [
          1,
          2,
          3,
          4,
          12,
          22,
          23,
          5],
        "button": [
          "Profils"
        ]
      },
      {
        "id": "CPV",
        "name": "Visites Homepage",
        "title": "Taux de visite",
        "average": 0.75,
        "per": 1,
        "target": true,
        "childId": [
          "CPE",
          "CPO",
          "CPOHB"
        ],
        "forecast": [
          "FCPO",
          "FACPO"
        ],
        "connectors": [
          11,
          13,
          5
        ],
        "button": [
          "Profils",
          "Look Alike",
          "Retargeting"
        ]
      },
      {
        "id": "CPE",
        "name": "Engagements",
        "title": "Taux d'engagement",
        "average": 87,
        "per": 1,
        "connectors": [],
        "button": [
          "Profils",
          "Look Alike",
          "Retargeting"
        ]
      },
      {
        "id": "CPO",
        "name": "Offres",
        "title": "Taux d'offres",
        "average": 60,
        "per": 1,
        "connectors": [],
        "button": [
          "Profils",
          "Look Alike",
          "Retargeting"
        ]
      },
      {
        "id": "CPOHB",
        "name": "Baseline",
        "title": "Baseline",
        "average": 60,
        "per": 1,
        "connectors": [],
        "cr": false,
        "objectifable": false,
        "baseline": "CPO"
      }
    ]
  }
})