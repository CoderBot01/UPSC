
import type { UPSCSubject } from '@/types';

export const upscSyllabus: UPSCSubject[] = [
  {
    id: 'gs1',
    name: 'General Studies Paper I',
    mainTopics: [
      {
        id: 'gs1-indian-heritage-culture',
        title: 'Indian Heritage and Culture',
        subTopics: [
          {
            id: 'gs1-ihc-art-forms',
            title: 'Indian culture: Salient aspects of Art Forms, literature and Architecture from ancient to modern times.',
          },
          {
            id: 'gs1-ihc-festivals',
            title: 'Indian Festivals and Fairs.',
          },
          {
            id: 'gs1-ihc-performing-arts',
            title: 'Indian Performing Arts: Dance, Music, Theatre.',
          },
          {
            id: 'gs1-ihc-visual-arts',
            title: 'Indian Visual Arts: Painting, Sculpture, Pottery.',
          },
          {
            id: 'gs1-ihc-religions-philosophies',
            title: 'Religions and Philosophies of India.',
          },
          {
            id: 'gs1-ihc-language-literature',
            title: 'Indian languages and literature.',
          },
          {
            id: 'gs1-ihc-buddhist-jain-architecture',
            title: 'Buddhist and Jain Architecture.',
          },
          {
            id: 'gs1-ihc-temple-architecture',
            title: 'Temple Architecture styles (Nagara, Dravida, Vesara).',
          },
          {
            id: 'gs1-ihc-indo-islamic-architecture',
            title: 'Indo-Islamic Architecture.',
          },
          {
            id: 'gs1-ihc-modern-architecture',
            title: 'Modern Architecture in India.',
          },
        ],
      },
      {
        id: 'gs1-history-modern',
        title: 'Modern Indian History',
        subTopics: [
          {
            id: 'gs1-hist-mid18th-present',
            title: 'Modern Indian history from about the middle of the eighteenth century until the present - significant events, personalities, issues.',
            subTopics: [
                { id: 'gs1-hist-british-conquest', title: 'British conquest of India.' },
                { id: 'gs1-hist-socio-religious-reforms', title: 'Socio-religious reform movements.' },
                { id: 'gs1-hist-uprising-1857', title: 'The Revolt of 1857.' },
                { id: 'gs1-hist-indian-nationalism', title: 'Rise and growth of Indian Nationalism.' },
            ]
          },
          {
            id: 'gs1-hist-freedom-struggle',
            title: 'The Freedom Struggle - its various stages and important contributors /contributions from different parts of the country.',
             subTopics: [
                { id: 'gs1-hist-early-nationalist-phase', title: 'Early Nationalist phase.' },
                { id: 'gs1-hist-gandhian-era', title: 'Gandhian Era and movements.' },
                { id: 'gs1-hist-revolutionary-movements', title: 'Revolutionary movements.' },
                { id: 'gs1-hist-partition-independence', title: 'Partition and Independence.' },
            ]
          },
          {
            id: 'gs1-hist-post-independence',
            title: 'Post-independence consolidation and reorganization within the country.',
            subTopics: [
                { id: 'gs1-hist-integration-states', title: 'Integration of princely states.' },
                { id: 'gs1-hist-linguistic-reorganization', title: 'Linguistic reorganization of states.' },
                { id: 'gs1-hist-foreign-policy-early', title: 'India\'s foreign policy in initial years.' },
            ]
          },
        ],
      },
      {
        id: 'gs1-history-world',
        title: 'History of the World',
        subTopics: [
          {
            id: 'gs1-worldhist-18thcentury',
            title: 'History of the world will include events from 18th century such as industrial revolution, world wars, redrawal of national boundaries, colonization, decolonization.',
            subTopics: [
                { id: 'gs1-worldhist-industrial-revolution', title: 'Industrial Revolution and its impact.' },
                { id: 'gs1-worldhist-american-revolution', title: 'American Revolution.' },
                { id: 'gs1-worldhist-french-revolution', title: 'French Revolution.' },
                { id: 'gs1-worldhist-world-war-1', title: 'World War I: Causes and Consequences.' },
                { id: 'gs1-worldhist-russian-revolution', title: 'Russian Revolution.' },
                { id: 'gs1-worldhist-inter-war-period', title: 'Inter-War Period: League of Nations, Rise of Fascism and Nazism.' },
                { id: 'gs1-worldhist-world-war-2', title: 'World War II: Causes and Consequences.' },
                { id: 'gs1-worldhist-cold-war', title: 'Cold War Era.' },
                { id: 'gs1-worldhist-decolonization-asia-africa', title: 'Decolonization in Asia and Africa.' },
            ]
          },
          {
            id: 'gs1-worldhist-philosophies',
            title: 'Political philosophies like communism, capitalism, socialism etc.- their forms and effect on the society.',
          }
        ],
      },
      {
        id: 'gs1-society',
        title: 'Indian Society',
        subTopics: [
          {
            id: 'gs1-soc-features',
            title: 'Salient features of Indian Society, Diversity of India.',
          },
          {
            id: 'gs1-soc-women',
            title: 'Role of women and women’s organization, population and associated issues, poverty and developmental issues, urbanization, their problems and their remedies.',
          },
          {
            id: 'gs1-soc-globalization',
            title: 'Effects of globalization on Indian society.',
          },
          {
            id: 'gs1-soc-empowerment',
            title: 'Social empowerment, communalism, regionalism & secularism.',
          },
          {
            id: 'gs1-soc-family-kinship',
            title: 'Family, Marriage, Kinship systems in India.',
          },
          {
            id: 'gs1-soc-caste-system',
            title: 'Caste system and its transformations.',
          },
          {
            id: 'gs1-soc-tribal-issues',
            title: 'Tribal communities in India and their issues.',
          },
        ],
      },
      {
        id: 'gs1-geography',
        title: 'Geography of the World and Society',
        subTopics: [
          {
            id: 'gs1-geo-physical',
            title: 'Salient features of world’s physical geography.',
            subTopics: [
                { id: 'gs1-geo-earth-interior', title: 'Earth\'s Interior, Rocks, Plate Tectonics, Earthquakes, Volcanoes.' },
                { id: 'gs1-geo-landforms', title: 'Landforms and their evolution (Mountains, Plateaus, Plains).' },
                { id: 'gs1-geo-climate', title: 'Climatology: Atmosphere, Weather and Climate, Climate types.' },
                { id: 'gs1-geo-oceanography', title: 'Oceanography: Ocean currents, Tides, Marine resources.' },
            ]
          },
          {
            id: 'gs1-geo-resources',
            title: 'Distribution of key natural resources across the world (including South Asia and the Indian sub-continent); factors responsible for the location of primary, secondary, and tertiary sector industries in various parts of the world (including India).',
          },
          {
            id: 'gs1-geo-phenomena',
            title: 'Important Geophysical phenomena such as earthquakes, Tsunami, Volcanic activity, cyclone etc., geographical features and their location-changes in critical geographical features (including water-bodies and ice-caps) and in flora and fauna and the effects of such changes.',
          },
          {
            id: 'gs1-geo-indian-geography',
            title: 'Indian Geography: Physical features, Climate, Soils, Natural vegetation, Resources (minerals, water, forests).',
          },
          {
            id: 'gs1-geo-human-geography',
            title: 'Human Geography: Population, Migration, Human development, Settlements.',
          },
        ],
      },
    ],
  },
  {
    id: 'gs2',
    name: 'General Studies Paper II',
    mainTopics: [
      {
        id: 'gs2-constitution-polity',
        title: 'Indian Constitution and Polity',
        subTopics: [
            { id: 'gs2-const-evolution', title: 'Indian Constitution—historical underpinnings, evolution, features, amendments, significant provisions and basic structure.' },
            { id: 'gs2-const-union-states-functions', title: 'Functions and responsibilities of the Union and the States, issues and challenges pertaining to the federal structure, devolution of powers and finances up to local levels and challenges therein.' },
            { id: 'gs2-const-separation-powers', title: 'Separation of powers between various organs dispute redressal mechanisms and institutions.' },
            { id: 'gs2-const-comparison', title: 'Comparison of the Indian constitutional scheme with that of other countries.' },
            { id: 'gs2-const-parliament-legislatures', title: 'Parliament and State legislatures—structure, functioning, conduct of business, powers & privileges and issues arising out of these.' },
            { id: 'gs2-const-executive-judiciary', title: 'Structure, organization and functioning of the Executive and the Judiciary Ministries and Departments of the Government; pressure groups and formal/informal associations and their role in the Polity.' },
            { id: 'gs2-const-rpa', title: 'Salient features of the Representation of People’s Act.' },
            { id: 'gs2-const-appointments', title: 'Appointment to various Constitutional posts, powers, functions and responsibilities of various Constitutional Bodies (e.g., Election Commission, UPSC, CAG, Finance Commission, National Commissions for SCs/STs/BCs).' },
            { id: 'gs2-const-statutory-bodies', title: 'Statutory, regulatory and various quasi-judicial bodies (e.g., NITI Aayog, NHRC, CIC, Lokpal and Lokayuktas).' },
            { id: 'gs2-const-preamble', title: 'Preamble of the Constitution.' },
            { id: 'gs2-const-fr-fd-dpsp', title: 'Fundamental Rights, Fundamental Duties, Directive Principles of State Policy.' },
            { id: 'gs2-const-citizenship', title: 'Citizenship.' },
            { id: 'gs2-const-emergency-provisions', title: 'Emergency Provisions.' },
            { id: 'gs2-const-center-state-relations', title: 'Center-State Relations (Legislative, Administrative, Financial).' },
            { id: 'gs2-const-inter-state-relations', title: 'Inter-State Relations.' },
            { id: 'gs2-const-local-government', title: 'Local Government: Panchayati Raj Institutions and Urban Local Bodies (73rd and 74th Amendments).' },
        ],
      },
      {
        id: 'gs2-governance',
        title: 'Governance',
        subTopics: [
          { id: 'gs2-gov-schemes', title: 'Government policies and interventions for development in various sectors and issues arising out of their design and implementation.' },
          { id: 'gs2-gov-development-processes', title: 'Development processes and the development industry —the role of NGOs, SHGs, various groups and associations, donors, charities, institutional and other stakeholders.' },
          { id: 'gs2-gov-welfare-schemes', title: 'Welfare schemes for vulnerable sections of the population by the Centre and States and the performance of these schemes; mechanisms, laws, institutions and Bodies constituted for the protection and betterment of these vulnerable sections.' },
          { id: 'gs2-gov-social-sector', title: 'Issues relating to development and management of Social Sector/Services relating to Health, Education, Human Resources.' },
          { id: 'gs2-gov-poverty-hunger', title: 'Issues relating to poverty and hunger.' },
          { id: 'gs2-gov-transparency-accountability', title: 'Important aspects of governance, transparency and accountability, e-governance- applications, models, successes, limitations, and potential; citizens charters, transparency & accountability and institutional and other measures.' },
          { id: 'gs2-gov-role-civil-services', title: 'Role of civil services in a democracy.' },
          { id: 'gs2-gov-good-governance', title: 'Concepts of Good Governance, Citizen Centric Governance.' },
          { id: 'gs2-gov-rti-act', title: 'Right to Information Act.' },
          { id: 'gs2-gov-social-audit', title: 'Social Audit.' },
        ]
      },
      {
        id: 'gs2-social-justice',
        title: 'Social Justice',
        subTopics: [
          { id: 'gs2-sj-welfare', title: 'Welfare schemes for vulnerable sections of the population by the Centre and States and the performance of these schemes (focus on SC, ST, OBC, Minorities, Women, Children, Elderly, Differently-abled).' },
          { id: 'gs2-sj-mechanisms', title: 'Mechanisms, laws, institutions and Bodies constituted for the protection and betterment of these vulnerable sections.' },
          { id: 'gs2-sj-health', title: 'Issues relating to development and management of Social Sector/Services relating to Health (e.g., National Health Mission, Ayushman Bharat).' },
          { id: 'gs2-sj-education', title: 'Issues relating to development and management of Social Sector/Services relating to Education (e.g., National Education Policy, RTE Act).' },
          { id: 'gs2-sj-human-resources', title: 'Issues relating to development and management of Social Sector/Services relating to Human Resources (Skill Development).' },
          { id: 'gs2-sj-poverty-hunger', title: 'Issues relating to poverty and hunger, and their eradication.' },
          { id: 'gs2-sj-rights-issues', title: 'Rights issues (Human Rights, Women\'s Rights, Child Rights, SC/ST Rights).' },
        ]
      },
      {
        id: 'gs2-international-relations',
        title: 'International Relations',
        subTopics: [
          { id: 'gs2-ir-india-neighborhood', title: 'India and its neighborhood- relations (e.g., Pakistan, China, Bangladesh, Sri Lanka, Nepal, Bhutan, Myanmar, Afghanistan, Maldives).' },
          { id: 'gs2-ir-bilateral-groupings', title: 'Bilateral, regional and global groupings and agreements involving India and/or affecting India’s interests (e.g., SAARC, BIMSTEC, SCO, ASEAN, BRICS, QUAD, G20, G7).' },
          { id: 'gs2-ir-policies-politics-countries', title: 'Effect of policies and politics of developed and developing countries on India’s interests, Indian diaspora.' },
          { id: 'gs2-ir-international-institutions', title: 'Important International institutions, agencies and fora- their structure, mandate (e.g., UN, WTO, IMF, World Bank, WHO).' },
          { id: 'gs2-ir-indian-foreign-policy', title: 'Evolution of Indian Foreign Policy, principles and objectives.' },
          { id: 'gs2-ir-non-alignment', title: 'Non-Aligned Movement (NAM) and its relevance.' },
          { id: 'gs2-ir-nuclear-policy', title: 'India\'s Nuclear Policy.' },
          { id: 'gs2-ir-maritime-security', title: 'Maritime security and India\'s role in the Indian Ocean region.' },
        ],
      },
    ],
  },
  {
    id: 'gs3',
    name: 'General Studies Paper III',
    mainTopics: [
      {
        id: 'gs3-indian-economy',
        title: 'Indian Economy and issues relating to planning, mobilization of resources, growth, development and employment.',
        subTopics: [
          { id: 'gs3-econ-planning', title: 'Indian Economy and issues relating to planning.' },
          { id: 'gs3-econ-resource-mobilization', title: 'Mobilization of resources.' },
          { id: 'gs3-econ-growth-development-employment', title: 'Growth, development and employment.' },
          { id: 'gs3-econ-inclusive-growth', title: 'Inclusive growth and issues arising from it.' },
          { id: 'gs3-econ-budgeting', title: 'Government Budgeting, Fiscal Policy, Monetary Policy.' },
          { id: 'gs3-econ-inflation', title: 'Inflation and its control measures.' },
          { id: 'gs3-econ-capital-market', title: 'Indian Capital Market.' },
          { id: 'gs3-econ-banking-sector', title: 'Banking sector reforms, Non-Performing Assets (NPAs).' },
          { id: 'gs3-econ-fdi-fpi', title: 'Foreign Direct Investment (FDI), Foreign Portfolio Investment (FPI).' },
          { id: 'gs3-econ-balance-of-payments', title: 'Balance of Payments.' },
        ],
      },
      {
        id: 'gs3-agriculture',
        title: 'Agriculture and Food Management',
        subTopics: [
          { id: 'gs3-agri-major-crops', title: 'Major crops cropping patterns in various parts of the country.' },
          { id: 'gs3-agri-irrigation', title: 'Different types of irrigation and irrigation systems.' },
          { id: 'gs3-agri-storage-transport-marketing', title: 'Storage, transport and marketing of agricultural produce and issues and related constraints.' },
          { id: 'gs3-agri-e-technology', title: 'E-technology in the aid of farmers.' },
          { id: 'gs3-agri-farm-subsidies-msp', title: 'Issues related to direct and indirect farm subsidies and minimum support prices.' },
          { id: 'gs3-agri-pds', title: 'Public Distribution System objectives, functioning, limitations, revamping.' },
          { id: 'gs3-agri-buffer-stocks-food-security', title: 'Issues of buffer stocks and food security.' },
          { id: 'gs3-agri-technology-missions', title: 'Technology missions in agriculture.' },
          { id: 'gs3-agri-animal-rearing', title: 'Economics of animal-rearing.' },
          { id: 'gs3-agri-food-processing', title: 'Food processing and related industries in India- scope and significance, location, upstream and downstream requirements, supply chain management.' },
          { id: 'gs3-agri-land-reforms', title: 'Land reforms in India.' },
          { id: 'gs3-agri-agricultural-finance', title: 'Agricultural Finance and Marketing.' },
        ],
      },
      {
        id: 'gs3-liberalization-industrial-policy',
        title: 'Effects of liberalization on the economy, changes in industrial policy and their effects on industrial growth.',
        subTopics: [
            { id: 'gs3-lib-impact-on-economy', title: 'Impact of liberalization on the Indian economy.' },
            { id: 'gs3-lib-industrial-policy-changes', title: 'Changes in industrial policy and their effects on industrial growth.' },
            { id: 'gs3-lib-make-in-india', title: 'Make in India initiative.' },
            { id: 'gs3-lib-sezs', title: 'Special Economic Zones (SEZs).' },
        ]
      },
      {
        id: 'gs3-infrastructure',
        title: 'Infrastructure: Energy, Ports, Roads, Airports, Railways etc.',
        subTopics: [
            { id: 'gs3-infra-energy', title: 'Energy sector: Sources (Renewable and Non-renewable), Energy security, National Solar Mission.' },
            { id: 'gs3-infra-ports', title: 'Ports and their role in trade.' },
            { id: 'gs3-infra-roads', title: 'Roads: National Highways, Rural roads.' },
            { id: 'gs3-infra-airports', title: 'Airports development and management.' },
            { id: 'gs3-infra-railways', title: 'Railways modernization and development.' },
            { id: 'gs3-infra-investment-models', title: 'Investment models in infrastructure (PPP, etc.).' },
            { id: 'gs3-infra-national-infra-pipeline', title: 'National Infrastructure Pipeline.' },
        ]
      },
      {
        id: 'gs3-science-technology',
        title: 'Science and Technology',
        subTopics: [
          { id: 'gs3-st-developments-applications', title: 'Science and Technology- developments and their applications and effects in everyday life.' },
          { id: 'gs3-st-achievements-indians', title: 'Achievements of Indians in science & technology; indigenization of technology and developing new technology.' },
          { id: 'gs3-st-awareness-it-space', title: 'Awareness in the fields of IT, Space, Computers, robotics, nano-technology, bio-technology.' },
          { id: 'gs3-st-ipr', title: 'Issues relating to intellectual property rights.' },
          { id: 'gs3-st-space-program', title: 'India\'s Space Program: ISRO, Satellites, Applications.' },
          { id: 'gs3-st-defence-tech', title: 'Defence Technology: DRDO, Missiles, Indigenous development.' },
          { id: 'gs3-st-biotechnology', title: 'Biotechnology: Applications in agriculture, health, industry.' },
          { id: 'gs3-st-nanotechnology', title: 'Nanotechnology: Applications and potential.' },
          { id: 'gs3-st-ict', title: 'Information and Communication Technology (ICT): Digital India, E-governance.' },
        ],
      },
      {
        id: 'gs3-environment-biodiversity',
        title: 'Environment, Biodiversity and Climate Change',
        subTopics: [
          { id: 'gs3-env-conservation', title: 'Conservation, environmental pollution and degradation, environmental impact assessment.' },
          { id: 'gs3-env-climate-change', title: 'Climate change, its impact, mitigation and adaptation strategies.' },
          { id: 'gs3-env-biodiversity', title: 'Biodiversity conservation, Convention on Biological Diversity (CBD).' },
          { id: 'gs3-env-pollution', title: 'Types of pollution (Air, Water, Soil, Noise) and control measures.' },
          { id: 'gs3-env-waste-management', title: 'Waste Management (Solid, E-waste, Hazardous).' },
          { id: 'gs3-env-international-agreements', title: 'International agreements and conventions (Paris Agreement, Kyoto Protocol, Montreal Protocol).' },
          { id: 'gs3-env-national-action-plan-cc', title: 'National Action Plan on Climate Change (NAPCC).' },
        ],
      },
      {
        id: 'gs3-disaster-management',
        title: 'Disaster and Disaster Management',
        subTopics: [
          { id: 'gs3-dm-types-of-disasters', title: 'Types of disasters (Natural and Man-made).' },
          { id: 'gs3-dm-ndma-guidelines', title: 'National Disaster Management Authority (NDMA) guidelines.' },
          { id: 'gs3-dm-sendai-framework', title: 'Sendai Framework for Disaster Risk Reduction.' },
          { id: 'gs3-dm-community-based-dm', title: 'Community-based disaster management.' },
          { id: 'gs3-dm-role-of-agencies', title: 'Role of various agencies in disaster management (NDRF, SDRF).' },
        ],
      },
      {
        id: 'gs3-internal-security',
        title: 'Internal Security',
        subTopics: [
          { id: 'gs3-is-linkages-extremism', title: 'Linkages between development and spread of extremism.' },
          { id: 'gs3-is-role-external-actors', title: 'Role of external state and non-state actors in creating challenges to internal security.' },
          { id: 'gs3-is-communication-networks', title: 'Challenges to internal security through communication networks, role of media and social networking sites in internal security challenges.' },
          { id: 'gs3-is-cyber-security', title: 'Basics of cyber security; money-laundering and its prevention.' },
          { id: 'gs3-is-border-areas', title: 'Security challenges and their management in border areas (including coastal security).' },
          { id: 'gs3-is-organized-crime-terrorism', title: 'Linkages of organized crime with terrorism.' },
          { id: 'gs3-is-various-forces', title: 'Various Security forces and agencies and their mandate (e.g., CAPFs, Police, Intelligence agencies).' },
          { id: 'gs3-is-left-wing-extremism', title: 'Left Wing Extremism (Naxalism).' },
          { id: 'gs3-is-terrorism', title: 'Terrorism, its types and impact.' },
          { id: 'gs3-is-insurgency-ne', title: 'Insurgency in North-East India.' },
          { id: 'gs3-is-jammu-kashmir-issues', title: 'Issues in Jammu and Kashmir.' },
        ],
      },
    ],
  },
  {
    id: 'gs4',
    name: 'General Studies Paper IV',
    mainTopics: [
      {
        id: 'gs4-ethics-human-interface',
        title: 'Ethics and Human Interface',
        subTopics: [
          { id: 'gs4-ehi-essence-determinants-consequences', title: 'Essence, determinants and consequences of Ethics in human actions.' },
          { id: 'gs4-ehi-dimensions-ethics', title: 'Dimensions of ethics (Descriptive, Normative, Meta-ethics).' },
          { id: 'gs4-ehi-ethics-private-public', title: 'Ethics in private and public relationships.' },
        ],
      },
      {
        id: 'gs4-human-values',
        title: 'Human Values',
        subTopics: [
          { id: 'gs4-hv-lessons-leaders', title: 'Lessons from the lives and teachings of great leaders, reformers and administrators.' },
          { id: 'gs4-hv-role-family-society-education', title: 'Role of family, society and educational institutions in inculcating values.' },
        ],
      },
      {
        id: 'gs4-attitude',
        title: 'Attitude',
        subTopics: [
          { id: 'gs4-att-content-structure-function', title: 'Content, structure, function of attitude.' },
          { id: 'gs4-att-influence-relation-thought-behaviour', title: 'Its influence and relation with thought and behaviour.' },
          { id: 'gs4-att-moral-political-attitudes', title: 'Moral and political attitudes.' },
          { id: 'gs4-att-social-influence-persuasion', title: 'Social influence and persuasion.' },
        ],
      },
      {
        id: 'gs4-aptitude-foundational-values',
        title: 'Aptitude and Foundational Values for Civil Service',
        subTopics: [
          { id: 'gs4-afv-integrity', title: 'Integrity.' },
          { id: 'gs4-afv-impartiality-nonpartisanship', title: 'Impartiality and non-partisanship.' },
          { id: 'gs4-afv-objectivity', title: 'Objectivity.' },
          { id: 'gs4-afv-dedication-public-service', title: 'Dedication to public service.' },
          { id: 'gs4-afv-empathy-tolerance-compassion', title: 'Empathy, tolerance and compassion towards the weaker-sections.' },
        ],
      },
      {
        id: 'gs4-emotional-intelligence',
        title: 'Emotional Intelligence',
        subTopics: [
          { id: 'gs4-ei-concepts', title: 'Concepts of Emotional Intelligence.' },
          { id: 'gs4-ei-utilities-application', title: 'Utilities and application of Emotional Intelligence in administration and governance.' },
        ],
      },
      {
        id: 'gs4-contributions-moral-thinkers',
        title: 'Contributions of Moral Thinkers and Philosophers',
        subTopics: [
          { id: 'gs4-cmt-indian-thinkers', title: 'Moral thinkers and philosophers from India (e.g., Kautilya, Thiruvalluvar, Gandhiji, Ambedkar, Vivekananda, Tagore).' },
          { id: 'gs4-cmt-world-thinkers', title: 'Moral thinkers and philosophers from the world (e.g., Socrates, Plato, Aristotle, Kant, Mill, Rawls).' },
        ],
      },
      {
        id: 'gs4-public-service-values-ethics',
        title: 'Public/Civil Service Values and Ethics in Public Administration',
        subTopics: [
          { id: 'gs4-psv-status-problems', title: 'Status and problems of public/civil service values and ethics.' },
          { id: 'gs4-psv-ethical-concerns-dilemmas', title: 'Ethical concerns and dilemmas in government and private institutions.' },
          { id: 'gs4-psv-laws-rules-regulations-conscience', title: 'Laws, rules, regulations and conscience as sources of ethical guidance.' },
          { id: 'gs4-psv-accountability-ethical-governance', title: 'Accountability and ethical governance.' },
          { id: 'gs4-psv-strengthening-ethical-moral-values', title: 'Strengthening of ethical and moral values in governance.' },
          { id: 'gs4-psv-ethical-issues-ir-funding', title: 'Ethical issues in international relations and funding.' },
          { id: 'gs4-psv-corporate-governance', title: 'Corporate governance.' },
        ],
      },
      {
        id: 'gs4-probity-governance',
        title: 'Probity in Governance',
        subTopics: [
          { id: 'gs4-pg-concept-public-service', title: 'Concept of public service.' },
          { id: 'gs4-pg-philosophical-basis', title: 'Philosophical basis of governance and probity.' },
          { id: 'gs4-pg-information-sharing-transparency', title: 'Information sharing and transparency in government, Right to Information.' },
          { id: 'gs4-pg-codes-ethics-conduct', title: 'Codes of Ethics, Codes of Conduct.' },
          { id: 'gs4-pg-citizens-charters', title: 'Citizen’s Charters.' },
          { id: 'gs4-pg-work-culture', title: 'Work culture.' },
          { id: 'gs4-pg-quality-service-delivery', title: 'Quality of service delivery.' },
          { id: 'gs4-pg-utilization-public-funds', title: 'Utilization of public funds.' },
          { id: 'gs4-pg-challenges-corruption', title: 'Challenges of corruption.' },
        ],
      },
      {
        id: 'gs4-case-studies',
        title: 'Case Studies on Above Issues',
        subTopics: [
            { id: 'gs4-cs-approach', title: 'Approach to solving case studies.' },
            { id: 'gs4-cs-ethical-dilemmas-analysis', title: 'Analyzing ethical dilemmas in case studies.' },
            { id: 'gs4-cs-decision-making', title: 'Ethical decision-making frameworks.' },
        ]
      },
    ],
  },
  {
    id: 'optional-public-administration',
    name: 'Optional: Public Administration',
    mainTopics: [
      {
        id: 'pa-paper1',
        title: 'Paper I: Administrative Theory',
        subTopics: [
          {
            id: 'pa-p1-introduction',
            title: 'Introduction',
            subTopics: [
              { id: 'pa-p1-intro-meaning', title: 'Meaning, scope and significance of Public Administration' },
              { id: 'pa-p1-intro-wilson', title: 'Wilson’s vision of Public Administration' },
              { id: 'pa-p1-intro-evolution', title: 'Evolution of the discipline and its present status' },
              { id: 'pa-p1-intro-new-pa', title: 'New Public Administration' },
              { id: 'pa-p1-intro-pg', title: 'Public Choice approach' },
              { id: 'pa-p1-intro-challenges', title: 'Challenges of liberalization, Privatisation, Globalisation' },
              { id: 'pa-p1-intro-good-governance', title: 'Good Governance: concept and application' },
              { id: 'pa-p1-intro-new-pm', title: 'New Public Management' },
            ],
          },
          {
            id: 'pa-p1-administrative-thought',
            title: 'Administrative Thought',
            subTopics: [
              { id: 'pa-p1-thought-scientific-management', title: 'Scientific Management and Scientific Management movement' },
              { id: 'pa-p1-thought-classical-theory', title: 'Classical Theory; Fayol, Gulick, Urwick' },
              { id: 'pa-p1-thought-bureaucratic-theory', title: 'Max Weber’s bureaucratic model – its critique and post-Weberian Developments' },
              { id: 'pa-p1-thought-dynamic-administration', title: 'Dynamic Administration (Mary Parker Follett)' },
              { id: 'pa-p1-thought-human-relations', title: 'Human Relations School (Elton Mayo and others)' },
              { id: 'pa-p1-thought-functions-executive', title: 'Functions of the Executive (C.I. Barnard)' },
              { id: 'pa-p1-thought-simon', title: 'Simon’s decision-making theory' },
              { id: 'pa-p1-thought-participative-management', title: 'Participative Management (R. Likert, C. Argyris, D. McGregor)' },
            ],
          },
          {
            id: 'pa-p1-administrative-behaviour',
            title: 'Administrative Behaviour',
            subTopics: [
              { id: 'pa-p1-behaviour-process-techniques', title: 'Process and techniques of decision-making' },
              { id: 'pa-p1-behaviour-communication', title: 'Communication' },
              { id: 'pa-p1-behaviour-morale', title: 'Morale' },
              { id: 'pa-p1-behaviour-motivation-theories', title: 'Motivation Theories – content, process and contemporary' },
              { id: 'pa-p1-behaviour-leadership-theories', title: 'Theories of Leadership – traditional and modern' },
            ],
          },
          {
            id: 'pa-p1-organisations',
            title: 'Organisations',
            subTopics: [
              { id: 'pa-p1-org-theories', title: 'Theories – systems, contingency' },
              { id: 'pa-p1-org-structure-forms', title: 'Structure and forms: Ministries and Departments, Corporations, Companies, Boards and Commissions' },
              { id: 'pa-p1-org-adhoc-advisory', title: 'Ad hoc and advisory bodies' },
              { id: 'pa-p1-org-headquarters-field', title: 'Headquarters and Field relationships' },
              { id: 'pa-p1-org-regulatory-authorities', title: 'Regulatory Authorities' },
              { id: 'pa-p1-org-public-private-partnerships', title: 'Public - Private Partnerships' },
            ],
          },
          {
            id: 'pa-p1-accountability-control',
            title: 'Accountability and Control',
            subTopics: [
              { id: 'pa-p1-ac-concepts', title: 'Concepts of accountability and control' },
              { id: 'pa-p1-ac-legislative-executive-judicial', title: 'Legislative, Executive and Judicial control over administration' },
              { id: 'pa-p1-ac-citizen-administration', title: 'Citizen and Administration' },
              { id: 'pa-p1-ac-role-media-interest-groups', title: 'Role of media, interest groups, voluntary organizations' },
              { id: 'pa-p1-ac-civil-society', title: 'Civil society' },
              { id: 'pa-p1-ac-social-audit', title: 'Social audit' },
              { id: 'pa-p1-ac-citizen-charters', title: 'Citizen’s charters' },
              { id: 'pa-p1-ac-rti', title: 'Right to Information' },
              { id: 'pa-p1-ac-ombudsman', title: 'Lokpal and Lokayukta' },
            ],
          },
          {
            id: 'pa-p1-administrative-law',
            title: 'Administrative Law',
            subTopics: [
              { id: 'pa-p1-al-meaning-scope-significance', title: 'Meaning, scope and significance' },
              { id: 'pa-p1-al-dicey-droit-administratif', title: 'Dicey on Administrative law' },
              { id: 'pa-p1-al-delegated-legislation', title: 'Delegated legislation' },
              { id: 'pa-p1-al-administrative-tribunals', title: 'Administrative Tribunals' },
            ],
          },
          {
            id: 'pa-p1-comparative-public-administration',
            title: 'Comparative Public Administration',
            subTopics: [
              { id: 'pa-p1-cpa-historical-sociological', title: 'Historical and sociological factors affecting administrative systems' },
              { id: 'pa-p1-cpa-administration-politics', title: 'Administration and politics in different countries' },
              { id: 'pa-p1-cpa-current-status', title: 'Current status of Comparative Public Administration' },
              { id: 'pa-p1-cpa-ecology-administration', title: 'Ecology and administration' },
              { id: 'pa-p1-cpa-riggsian-models', title: 'Riggsian models and their critique' },
            ],
          },
          {
            id: 'pa-p1-development-dynamics',
            title: 'Development Dynamics',
            subTopics: [
              { id: 'pa-p1-dd-concept-development', title: 'Concept of development' },
              { id: 'pa-p1-dd-changing-profile', title: 'Changing profile of development administration' },
              { id: 'pa-p1-dd-anti-development-thesis', title: '‘Anti-development thesis’' },
              { id: 'pa-p1-dd-bureaucracy-development', title: 'Bureaucracy and development' },
              { id: 'pa-p1-dd-strong-state-market', title: 'Strong state versus the market debate' },
              { id: 'pa-p1-dd-impact-liberalization', title: 'Impact of liberalisation on administration in developing countries' },
              { id: 'pa-p1-dd-women-development', title: 'Women and development - the self-help group movement' },
            ],
          },
          {
            id: 'pa-p1-personnel-administration',
            title: 'Personnel Administration',
            subTopics: [
              { id: 'pa-p1-pa-importance', title: 'Importance of human resource development' },
              { id: 'pa-p1-pa-recruitment-training', title: 'Recruitment, training, career advancement, position classification, discipline, performance appraisal, promotion, pay and service conditions' },
              { id: 'pa-p1-pa-employer-employee-relations', title: 'Employer-employee relations, grievance redressal mechanism' },
              { id: 'pa-p1-pa-code-conduct', title: 'Code of conduct' },
              { id: 'pa-p1-pa-administrative-ethics', title: 'Administrative ethics' },
            ],
          },
          {
            id: 'pa-p1-public-policy',
            title: 'Public Policy',
            subTopics: [
              { id: 'pa-p1-pp-models', title: 'Models of policy-making and their critique' },
              { id: 'pa-p1-pp-processes-formulation', title: 'Processes of conceptualisation, planning, implementation, monitoring, evaluation and review and their limitations' },
              { id: 'pa-p1-pp-state-theories-policy', title: 'State theories and public policy formulation' },
            ],
          },
          {
            id: 'pa-p1-techniques-administrative-improvement',
            title: 'Techniques of Administrative Improvement',
            subTopics: [
              { id: 'pa-p1-tai-organisation-methods', title: 'Organisation and methods, Work study and work management' },
              { id: 'pa-p1-tai-e-governance-it', title: 'e-governance and information technology' },
              { id: 'pa-p1-tai-management-aid-tools', title: 'Management aid tools like network analysis, MIS, PERT, CPM' },
            ],
          },
          {
            id: 'pa-p1-financial-administration',
            title: 'Financial Administration',
            subTopics: [
              { id: 'pa-p1-fa-monetary-fiscal-policies', title: 'Monetary and fiscal policies' },
              { id: 'pa-p1-fa-budget-concept-forms', title: 'Public SDebt and budget – concept and forms' },
              { id: 'pa-p1-fa-budgetary-process', title: 'Budgetary process' },
              { id: 'pa-p1-fa-financial-accountability', title: 'Financial accountability' },
              { id: 'pa-p1-fa-accounts-audit', title: 'Accounts and audit' },
            ],
          },
        ],
      },
      {
        id: 'pa-paper2',
        title: 'Paper II: Indian Administration',
        subTopics: [
          {
            id: 'pa-p2-evolution-indian-administration',
            title: 'Evolution of Indian Administration',
            subTopics: [
              { id: 'pa-p2-eia-kautilya', title: 'Kautilya’s Arthashastra' },
              { id: 'pa-p2-eia-mughal-administration', title: 'Mughal administration' },
              { id: 'pa-p2-eia-legacy-british-rule', title: 'Legacy of British rule in politics and administration – Indianization of public services, revenue administration, district administration, local self-government' },
            ],
          },
          {
            id: 'pa-p2-philosophical-constitutional-framework',
            title: 'Philosophical and Constitutional Framework of Government',
            subTopics: [
              { id: 'pa-p2-pcf-salient-features-values', title: 'Salient features and value premises' },
              { id: 'pa-p2-pcf-constitutionalism', title: 'Constitutionalism' },
              { id: 'pa-p2-pcf-political-culture', title: 'Political culture' },
              { id: 'pa-p2-pcf-bureaucracy-democracy', title: 'Bureaucracy and democracy' },
              { id: 'pa-p2-pcf-bureaucracy-development', title: 'Bureaucracy and development' },
            ],
          },
          {
            id: 'pa-p2-public-sector-undertakings',
            title: 'Public Sector Undertakings',
            subTopics: [
              { id: 'pa-p2-psu-public-sector-modern-india', title: 'Public sector in modern India' },
              { id: 'pa-p2-psu-forms-psu', title: 'Forms of Public Sector Undertakings' },
              { id: 'pa-p2-psu-problems-autonomy-accountability', title: 'Problems of autonomy, accountability and control' },
              { id: 'pa-p2-psu-impact-liberalization-privatisation', title: 'Impact of liberalization and privatization' },
            ],
          },
          {
            id: 'pa-p2-union-government-administration',
            title: 'Union Government and Administration',
            subTopics: [
              { id: 'pa-p2-uga-executive-parliament-judiciary', title: 'Executive, Parliament, Judiciary – structure, functions, work processes' },
              { id: 'pa-p2-uga-recent-trends', title: 'Recent trends' },
              { id: 'pa-p2-uga-intra-governmental-relations', title: 'Intragovernmental relations' },
              { id: 'pa-p2-uga-cabinet-secretariat', title: 'Cabinet Secretariat' },
              { id: 'pa-p2-uga-pmo', title: 'Prime Minister’s Office' },
              { id: 'pa-p2-uga-central-secretariat', title: 'Central Secretariat' },
              { id: 'pa-p2-uga-ministries-departments', title: 'Ministries and Departments' },
              { id: 'pa-p2-uga-boards-commissions', title: 'Boards, Commissions' },
              { id: 'pa-p2-uga-attached-offices', title: 'Attached offices' },
              { id: 'pa-p2-uga-field-organisations', title: 'Field organizations' },
            ],
          },
          {
            id: 'pa-p2-plans-priorities',
            title: 'Plans and Priorities',
            subTopics: [
              { id: 'pa-p2-pp-machinery-planning', title: 'Machinery of planning' },
              { id: 'pa-p2-pp-role-composition-functions-planning-commission', title: 'Role, composition and functions of the Planning Commission and the National Development Council' },
              { id: 'pa-p2-pp-indicative-planning', title: '‘Indicative’ planning' },
              { id: 'pa-p2-pp-process-plan-formulation-state-level', title: 'Process of plan formulation at Union and State levels' },
              { id: 'pa-p2-pp-constitutional-amendments-planning', title: 'Constitutional Amendments (1992) and decentralized planning for economic development and social justice' },
            ],
          },
          {
            id: 'pa-p2-state-government-administration',
            title: 'State Government and Administration',
            subTopics: [
              { id: 'pa-p2-sga-union-state-administrative-legislative-financial-relations', title: 'Union-State administrative, legislative and financial relations' },
              { id: 'pa-p2-sga-role-finance-commission', title: 'Role of the Finance Commission' },
              { id: 'pa-p2-sga-governor', title: 'Governor' },
              { id: 'pa-p2-sga-chief-minister', title: 'Chief Minister' },
              { id: 'pa-p2-sga-council-ministers', title: 'Council of Ministers' },
              { id: 'pa-p2-sga-chief-secretary', title: 'Chief Secretary' },
              { id: 'pa-p2-sga-state-secretariat', title: 'State Secretariat' },
              { id: 'pa-p2-sga-directorates', title: 'Directorates' },
            ],
          },
          {
            id: 'pa-p2-district-administration-since-independence',
            title: 'District Administration since Independence',
            subTopics: [
              { id: 'pa-p2-dasi-changing-role-collector', title: 'Changing role of the Collector' },
              { id: 'pa-p2-dasi-union-state-local-relations', title: 'Union-state-local relations' },
              { id: 'pa-p2-dasi-imperatives-development-management', title: 'Imperatives of development management and law and order administration' },
              { id: 'pa-p2-dasi-district-administration-democracy', title: 'District administration and democratic decentralization' },
            ],
          },
          {
            id: 'pa-p2-civil-services',
            title: 'Civil Services',
            subTopics: [
              { id: 'pa-p2-cs-constitutional-position', title: 'Constitutional position' },
              { id: 'pa-p2-cs-structure-recruitment-training-career-development', title: 'Structure, recruitment, training and career development' },
              { id: 'pa-p2-cs-role-central-state-services', title: 'Role of Central and State Public Service Commissions' },
              { id: 'pa-p2-cs-good-governance-initiatives', title: 'Good governance initiatives' },
              { id: 'pa-p2-cs-code-conduct-discipline', title: 'Code of conduct and discipline' },
              { id: 'pa-p2-cs-staff-associations', title: 'Staff associations' },
              { id: 'pa-p2-cs-political-rights', title: 'Political rights' },
              { id: 'pa-p2-cs-grievance-redressal-mechanism', title: 'Grievance redressal mechanism' },
              { id: 'pa-p2-cs-civil-service-neutrality', title: 'Civil service neutrality' },
              { id: 'pa-p2-cs-civil-service-activism', title: 'Civil service activism' },
            ],
          },
          {
            id: 'pa-p2-financial-management',
            title: 'Financial Management',
            subTopics: [
              { id: 'pa-p2-fm-budget-instrument-control', title: 'Budget as a political instrument' },
              { id: 'pa-p2-fm-parliamentary-control-public-expenditure', title: 'Parliamentary control of public expenditure' },
              { id: 'pa-p2-fm-role-finance-ministry-expenditure', title: 'Role of finance ministry in monetary and fiscal area' },
              { id: 'pa-p2-fm-accounting-techniques', title: 'Accounting techniques' },
              { id: 'pa-p2-fm-audit', title: 'Audit' },
              { id: 'pa-p2-fm-role-cag', title: 'Role of Controller General of Accounts and Comptroller and Auditor General of India' },
            ],
          },
          {
            id: 'pa-p2-administrative-reforms-since-independence',
            title: 'Administrative Reforms since Independence',
            subTopics: [
              { id: 'pa-p2-arsi-major-concerns', title: 'Major concerns' },
              { id: 'pa-p2-arsi-important-committees-commissions', title: 'Important Committees and Commissions' },
              { id: 'pa-p2-arsi-reforms-financial-management-personnel-administration', title: 'Reforms in financial management and human resource development' },
              { id: 'pa-p2-arsi-problems-implementation', title: 'Problems of implementation' },
            ],
          },
          {
            id: 'pa-p2-rural-development',
            title: 'Rural Development',
            subTopics: [
              { id: 'pa-p2-rd-institutions-agencies-since-independence', title: 'Institutions and agencies since independence' },
              { id: 'pa-p2-rd-rural-development-programmes-foci-strategies', title: 'Rural development programmes: foci and strategies' },
              { id: 'pa-p2-rd-decentralization-panchayati-raj', title: 'Decentralization and Panchayati Raj' },
              { id: 'pa-p2-rd-73rd-amendment', title: '73rd Constitutional Amendment' },
            ],
          },
          {
            id: 'pa-p2-urban-local-government',
            title: 'Urban Local Government',
            subTopics: [
              { id: 'pa-p2-ulg-municipal-governance-main-features-structures-finance-problem-areas', title: 'Municipal governance: main features, structures, finance and problem areas' },
              { id: 'pa-p2-ulg-74th-amendment', title: '74th Constitutional Amendment' },
              { id: 'pa-p2-ulg-global-local-debate', title: 'Global-local debate' },
              { id: 'pa-p2-ulg-new-localism', title: 'New localism' },
              { id: 'pa-p2-ulg-development-dynamics-politics-administration-urban-development', title: 'Development dynamics, politics and administration with special reference to urban development' },
            ],
          },
          {
            id: 'pa-p2-law-order-administration',
            title: 'Law and Order Administration',
            subTopics: [
              { id: 'pa-p2-loa-british-legacy', title: 'British legacy' },
              { id: 'pa-p2-loa-national-police-commission', title: 'National Police Commission' },
              { id: 'pa-p2-loa-investigative-agencies', title: 'Investigative agencies' },
              { id: 'pa-p2-loa-role-central-state-agencies-maintenance-law-order', title: 'Role of Central and State agencies in maintenance of law and order and countering insurgency and terrorism' },
              { id: 'pa-p2-loa-criminalisation-politics-administration', title: 'Criminalisation of politics and administration' },
              { id: 'pa-p2-loa-police-public-relations', title: 'Police-public relations' },
              { id: 'pa-p2-loa-reforms-police', title: 'Reforms in Police' },
            ],
          },
          {
            id: 'pa-p2-significant-issues-indian-administration',
            title: 'Significant Issues in Indian Administration',
            subTopics: [
              { id: 'pa-p2-siia-values-public-service', title: 'Values in public service' },
              { id: 'pa-p2-siia-regulatory-commissions', title: 'Regulatory Commissions' },
              { id: 'pa-p2-siia-national-human-rights-commission', title: 'National Human Rights Commission' },
              { id: 'pa-p2-siia-problems-administration-coalition-governments', title: 'Problems of administration in coalition regimes' },
              { id: 'pa-p2-siia-citizen-administration-interface', title: 'Citizen-administration interface' },
              { id: 'pa-p2-siia-corruption-administration', title: 'Corruption and administration' },
              { id: 'pa-p2-siia-disaster-management', title: 'Disaster management' },
            ],
          },
        ],
      },
    ],
  },
];

