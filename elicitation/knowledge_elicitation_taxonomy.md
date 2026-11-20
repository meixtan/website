# Knowledge Elicitation Map
As a researcher working in human centered AI, I've always found it difficult to navigate research scattered across the disciplines. This is especially true for knowledge elicitation methods, so I've created this living resource as I collect and learn. I've organized it by what each method asks participants to do.

# Why knowledge elicitation?
Knowledge elicitation was central to early AI. In the 1980s, expert systems depended on researchers extracting specialists' knowledge and translating it into rules. This created the knowledge acquisition bottleneck: eliciting enough accurate knowledge was labor intensive, and the resulting rules were difficult to maintain.

Machine learning changed how AI acquires knowledge. Rather than asking experts to articulate rules, researchers increasingly trained models on large datasets.

A review of knowledge elicitation in ML found that experts were primarily treated as sources of input to the ML pipeline, asked to identify relevant features, provide labels, or evaluate models. These tasks assume researchers have already defined the problem and decided how to represent it computationally. In my research, this meant engineers could contribute their expertise directly, while teachers had to advocate for theirs and rely on engineers to translate it into technical decisions.

Traditional knowledge elicitation starts earlier, allowing researchers to discover a domain through its practitioners. Rediscovering these methods may inspire new ways to represent human knowledge in machine learning.

## References
Cooke, N. J. (1994). Varieties of knowledge elicitation techniques. International Journal of Human-Computer Studies, 41(6), 801–849. https://doi.org/10.1006/ijhc.1994.1083

Hoffman, R. R., Shadbolt, N. R., Burton, A. M., & Klein, G. (1995). Eliciting knowledge from experts: A methodological analysis. Organizational Behavior and Human Decision Processes, 62(2), 129–158.

Kerrigan, D., Hullman, J., & Bertini, E. (2021). A survey of domain knowledge elicitation in applied machine learning. Multimodal Technologies and Interaction, 5(12), 73. https://doi.org/10.3390/mti5120073

Tan, M., Lee, H., Wang, D., & Subramonyam, H. (2024). Is a seat at the table enough? Engaging teachers and students in dataset specification for ML in education. Proceedings of the ACM on Human-Computer Interaction, 8(CSCW1), Article 81. https://doi.org/10.1145/3637358

## Interviews
*Participants explain their knowledge.*

### Teaching
*The expert explains or teaches what they know directly.*

#### Tutorial interview

**Summary:** An expert teaches the researcher an introductory lesson about their domain.

**Tradition:** Knowledge Engineering / AI

**Origins:** Tutorial interviews emerged in 1980s knowledge engineering, building on interviews and case walkthroughs. They helped researchers learn a domain through an expert because textbooks and standard definitions often missed experts' specialized terminology.

**Method:** The researcher asks a domain expert to prepare an introductory lesson of approximately one hour, covering the main concepts and ideas in their field. The expert determines what to teach and how to organize it, while the researcher asks questions for clarification. The researcher records and transcribes the lesson, then analyzes it to identify important concepts, terminology, and relationships.

**Examples:** Cottam and Shadbolt (1998) worked with a search and rescue coordination center to understand how experts plan rescue operations. They began with documentation and recorded tutorial interviews, then moved to explanations of specific rescue incidents. The tutorial interviews established their initial understanding of the domain.

Morgan and colleagues (2019) studied how speech and language therapists decide what to work on with preschool children with developmental speech and language disorders. After identifying ten themes describing therapy goals, they asked 37 therapists to explain each theme as though speaking to a parent. They compared the explanations to identify missing details and differences in interpretation.

**References**

- Neale, I. M. (1988). First generation expert systems: A review of knowledge acquisition methodologies. *The Knowledge Engineering Review, 3*(2), 105–145. https://doi.org/10.1017/S0269888900004288
- Boose, J. H. (1989). A survey of knowledge acquisition techniques and tools. *Knowledge Acquisition, 1*(1), 3–37. https://doi.org/10.1016/S1042-8143(89)80003-2
- Cottam, H., & Shadbolt, N. (1998). Knowledge acquisition for search and rescue planning. *International Journal of Human-Computer Studies, 48*(4), 449–473. https://doi.org/10.1006/ijhc.1997.0193
- Morgan, L., Marshall, J., Harding, S., Powell, G., Wren, Y., Coad, J., & Roulstone, S. (2019). ‘It depends’: Characterizing speech and language therapy for preschool children with developmental speech and language disorders. *International Journal of Language & Communication Disorders, 54*(6), 954–970. https://doi.org/10.1111/1460-6984.12498

#### Teachback

**Summary:** The researcher explains an expert's knowledge back to them for correction.

**Tradition:** Knowledge Engineering / AI

**Origins:** Teachback originated in 1970s research on learning, where students explained what they had learned to demonstrate their understanding. Knowledge engineers adapted the method for expert systems research in the 1980s.

**Method:** The expert explains a concept or procedure, then the researcher teaches it back in their own words or demonstrates it by solving a problem. The expert corrects misunderstandings, and the researcher tries again until the expert agrees.

**Example:** Hoerner and colleagues (2023) investigated how factory workers diagnose and fix production problems, including defects in product coatings. They observed 36 workers troubleshooting problems on a manufacturing line. An analyst recorded the workers' actions, then conducted teachback interviews: the analyst described what they had observed, and workers corrected the descriptions or added missing details. Researchers used these explanations to develop 228 sets of troubleshooting rules.

**References**

- Johnson, L., & Johnson, N. E. (1987). Knowledge elicitation involving teachback interviewing. In A. L. Kidd (Ed.), *Knowledge acquisition for expert systems: A practical handbook* (pp. 91–108). Plenum Press. https://doi.org/10.1007/978-1-4613-1823-1_5
- Hoerner, L., Schamberger, M., & Bodendorf, F. (2023). Using tacit expert knowledge to support shop-floor operators through a knowledge-based assistance system. *Computer Supported Cooperative Work, 32*, 55–91. https://doi.org/10.1007/s10606-022-09445-4

#### Knowledge audit

**Summary:** Experts recall experiences in response to prompts about different aspects of their expertise.

**Tradition:** Psychology / Cognitive Science  
**Tags:** Cognitive Task Analysis

**Origins:** The knowledge audit was developed in the 1990s from research comparing experts and novices. Earlier methods like the Critical Decision Method required lengthy interviews about specific incidents, so researchers developed a faster way to identify the skills that distinguish experts.

**Method:** The researcher interviews an expert using eight prompts about different aspects of expertise, including noticing subtle cues, anticipating what will happen, recognizing anomalies, improvising, and using tricks of the trade. For each, the expert recalls a specific experience. The researcher asks what cues they noticed, what strategies they used, and why a novice would have struggled in the same situation.

**Example:** McAndrew and Gore (2013) studied how experienced financial traders make decisions under uncertainty. They interviewed eight day traders, first mapping the stages of a trade and then using knowledge audit prompts to investigate difficult decisions, such as when to enter a market and how much to trade. One trader described detecting sudden movements in minor currencies. Experienced traders placed trades immediately, while novices could miss the opportunity by spending too long trying to explain the movement.

**References**

- Militello, L. G., & Hutton, R. J. B. (1998). Applied cognitive task analysis (ACTA): A practitioner's toolkit for understanding cognitive task demands. *Ergonomics, 41*(11), 1618–1641. https://doi.org/10.1080/001401398186108
- McAndrew, C., & Gore, J. (2013). Understanding preferences in experience-based choice: A study of cognition in the “wild.” *Journal of Cognitive Engineering and Decision Making, 7*(2), 179–197. https://doi.org/10.1177/1555343412463922

### Artifacts
*The participant discusses materials or records.*

#### Photo elicitation

**Summary:** Participants discuss photographs and the experiences or meanings they evoke.

**Traditions:** Anthropology / Ethnography; Sociology / Qualitative Research

**Origins:** Anthropologist John Collier developed photo elicitation in the 1950s while studying how families in Canada's Maritime Provinces adapted to migration, industrial work, and changing communities. Photographs prompted participants to recall details and discuss experiences that conventional interviews missed. The method later spread through visual anthropology and sociology.

**Method:** Researchers introduce photographs into an interview, either selecting existing images or asking participants to take photographs beforehand. Participants examine the pictures and explain what they show, what they mean, and what experiences or memories they bring to mind.

**Example:** Epstein and colleagues (2006) interviewed 35 children who had attended a summer camp for children with cancer. They showed 13 photographs of camp places and activities, including a climbing wall, cabins, a medical building, and a lake. Children chose pictures to discuss and described what happened there and how they felt. The photographs also prompted discussion of people and places missing from the pictures and of camp rules.

**References**

- Harper, D. (2002). Talking about pictures: A case for photo elicitation. *Visual Studies, 17*(1), 13–26. https://doi.org/10.1080/14725860220137345
- Collier, J., Jr. (1957). Photography in anthropology: A report on two experiments. *American Anthropologist, 59*(5), 843–859. https://doi.org/10.1525/aa.1957.59.5.02a00100
- Epstein, I., Stevens, B., McKeever, P., & Baruchel, S. (2006). Photo elicitation interview (PEI): Using photos to elicit children's perspectives. *International Journal of Qualitative Methods, 5*(3), 1–11. https://doi.org/10.1177/160940690600500301

#### Work product elicitation

**Summary:** Participants explain artifacts they have created or used.

**Traditions:** Sociology / Qualitative Research; Human-Computer Interaction / Design Research

**Origins:** Artifact elicitation developed from visual elicitation in anthropology and sociology, particularly photo elicitation. Researchers extended the use of photographs to physical objects, documents, work products, and other materials that participants could discuss during interviews.

**Method:** Participants bring an artifact they have created or used, such as a document, tool, assignment, or prototype. Researchers ask them to describe its features, demonstrate how it works, explain decisions made during its creation, and discuss the knowledge and skills involved. Participants can point to specific parts as they explain their thinking.

**Example:** Eyerman and colleagues (2018) interviewed girls in an afterschool engineering program about projects they had built, including foam robots, water filters, and structures made from toothpicks and gumdrops. In 102 video-recorded interviews, participants showed their projects and explained how they designed, tested, and improved them. One girl pointed to parts of her robot while explaining how she could add an arm and program it to move. Participants could often explain decisions using their projects even when they struggled to describe engineering design in abstract terms.

**References**

- Douglas, E. P., Jordan, S. S., Lande, M., & Bumbaco, A. E. (2015). Artifact elicitation as a method of qualitative inquiry in engineering education. In *Proceedings of the 2015 ASEE Annual Conference & Exposition*. https://doi.org/10.18260/p.23574
- Eyerman, S., Hug, S., McLeod, E., & Tauer, T. (2018). Uncovering K-12 youth engineering design thinking through artifact elicitation interviews. In *Proceedings of the 2018 ASEE Annual Conference & Exposition*. https://doi.org/10.18260/1-2--31163

#### Diagram elicitation

**Summary:** Participants review and correct researcher-prepared diagrams.

**Tradition:** Sociology / Qualitative Research

**Origins:** Graphic elicitation draws on visual interviewing in anthropology and sociology and on engineering design research. It also draws on member checking, in which researchers return their interpretations to participants for critique.

**Method:** Researchers prepare diagrams representing their understanding of a process, system, or domain, often based on earlier interviews. Participants examine the diagrams, identify missing elements, incorrect relationships, or misleading assumptions, and suggest changes.

**Example:** Crilly and colleagues (2006) interviewed industrial designers about what determines a product's appearance. After seven initial interviews, they drew a diagram showing relationships between designers, clients, and consumers and presented it to 12 more designers. One designer pointed out that clients often communicate directly with consumers, a connection missing from the diagram.

**Reference**

- Crilly, N., Blackwell, A. F., & Clarkson, P. J. (2006). Graphic elicitation: Using research diagrams as interview stimuli. *Qualitative Research, 6*(3), 341–366. https://doi.org/10.1177/1468794106065007

#### Trace interviews

**Summary:** Participants explain their own digital activity records.

**Traditions:** Sociology / Qualitative Research; Human-Computer Interaction / Design Research

**Origins:** Trace interviews grew out of digital ethnography and research using online activity records to study behavior. Dubois and Ford (2015) combined digital trace analysis with interviews to ask participants about what they actually did online.

**Method:** Researchers collect participants' digital activity records, such as browsing histories, social media interactions, or app usage logs, and turn them into charts, timelines, or network diagrams. During interviews, participants examine their own data and explain particular actions, unexpected patterns, or missing information.

**Example:** Gajardo and colleagues (2026) tracked websites and apps used by adults in the UK and Brazil, then interviewed 73 participants using charts of their browsing activity, most visited websites, and routes to news sites. One participant remembered reading CNN through Facebook links only after seeing CNN in his data. The records prompted people to recall news habits they had forgotten.

**References**

- Dubois, E., & Ford, H. (2015). Trace interviews: An actor-centered approach. *International Journal of Communication, 9*, 2067–2091. https://ijoc.org/index.php/ijoc/article/view/3378
- Gajardo, C., Kalogeropoulos, A., Rossini, P., Mont’Alverne, C., & Nicholls, T. (2026). Evaluating the potential and limits of trace-based interviews when studying news use. *Information, Communication & Society*. https://doi.org/10.1080/1369118X.2026.2652514

### Scenarios
*The participant works through or recalls a situation.*

#### Critical incident technique

**Summary:** Participants recount specific incidents of success or failure.

**Traditions:** Psychology / Cognitive Science; Sociology / Qualitative Research

**Origins:** Developed during World War II by the U.S. Army Air Forces' Aviation Psychology Program to identify behaviors associated with successful and unsuccessful pilot performance. Instructors often explained failures using vague judgments such as “poor judgment” or “unsuitable temperament,” so researchers collected descriptions of specific actions and their consequences. Flanagan formalized the technique in 1954.

**Method:** Researchers ask participants to recall a specific incident in which something went particularly well or badly. They ask what led up to it, exactly what the people involved said or did, and what happened afterward. They compare incidents to identify recurring behaviors and circumstances associated with success or failure.

**Example:** Bitner and colleagues (1990) interviewed customers about particularly good or bad experiences with airlines, hotels, and restaurants, collecting approximately 700 incidents. They asked when each incident happened, what led up to it, what employees said or did, and why it was memorable. Employee responses to service failures, special requests, and unexpected situations shaped how customers remembered their experiences.

**References**

- Flanagan, J. C. (1954). The critical incident technique. *Psychological Bulletin, 51*(4), 327–358. https://doi.org/10.1037/h0061470
- Bitner, M. J., Booms, B. H., & Tetreault, M. S. (1990). The service encounter: Diagnosing favorable and unfavorable incidents. *Journal of Marketing, 54*(1), 71–84. https://doi.org/10.1177/002224299005400105

#### Critical decision method

**Summary:** Experts reconstruct a difficult incident, explaining their decisions at key moments.

**Traditions:** Psychology / Cognitive Science; Knowledge Engineering / AI  
**Tag:** Cognitive Task Analysis

**Origins:** Developed by Gary Klein and colleagues in the 1980s while studying how experienced firefighters make decisions under pressure. It belongs to Naturalistic Decision Making, which investigates real decisions under uncertainty and time pressure. It extends the Critical Incident Technique to examine the cues and reasoning behind experts' decisions.

**Method:** Researchers ask an expert to recall a difficult or unusual incident involving important decisions. The interview proceeds in four passes: recount the incident; construct a timeline of events and decisions; revisit key moments to ask what the expert noticed, expected, considered, and knew; and ask what-if questions, such as what a novice might have missed or what would change if information were unavailable.

**Example:** Rimstad and Sollid (2015) investigated emergency response after the 2011 Oslo bombing. They interviewed the ambulance commander for 90 minutes using the Critical Decision Method, repeatedly reconstructing the incident timeline and asking about decisions and alternatives. Most critical decisions occurred in the first 30 minutes, when commanders still lacked reliable information about the scale of the disaster.

**References**

- Klein, G. A., Calderwood, R., & MacGregor, D. (1989). Critical decision method for eliciting knowledge. *IEEE Transactions on Systems, Man, and Cybernetics, 19*(3), 462–472. https://doi.org/10.1109/21.31053
- Hoffman, R. R., Crandall, B., & Shadbolt, N. (1998). Use of the critical decision method to elicit expert knowledge: A case study in the methodology of cognitive task analysis. *Human Factors, 40*(2), 254–276.
- Rimstad, R., & Sollid, S. J. M. (2015). A retrospective observational study of medical incident command and decision-making in the 2011 Oslo bombing. *International Journal of Emergency Medicine, 8*, Article 4. https://doi.org/10.1186/s12245-015-0052-9

#### Stimulated recall

**Summary:** Participants review recordings of their own performance and recall their thinking.

**Traditions:** Psychology / Cognitive Science; Sociology / Qualitative Research

**Origins:** Benjamin Bloom developed stimulated recall in 1953 to study what students were thinking during lectures and classroom discussions. He replayed audio recordings of lessons and asked students to recall their thoughts at specific moments. Researchers later used the method to study teacher decisions and other activities where talking during performance is difficult.

**Method:** Researchers record a participant performing a real task, usually with video or audio. Soon afterward, the participant reviews the recording, pausing to describe what they noticed, thought, or decided at specific moments. The researcher asks follow-up questions about actions and decisions and analyzes the explanations alongside the recording.

**Examples:** Ding and colleagues (2026) filmed 12 experienced and 12 novice basketball coaches and the court during competitive games. They replayed moments when coaches changed tactics and asked what they had noticed and why they acted. One experienced coach noticed an opposing point guard moving to exploit a gap in the defense. Novices more often described reacting after opponents had already scored repeatedly.

Jennett and Affleck (1998) used patient charts to investigate physicians' clinical decisions and identify training needs. Researchers showed physicians records of patients they had treated and asked why they ordered tests, chose treatments, or managed cases as they did. Interviews identified circumstances and workplace constraints missing from the charts.

**References**

- Calderhead, J. (1981). Stimulated recall: A method for research on teaching. *British Journal of Educational Psychology, 51*(2), 211–217. https://doi.org/10.1111/j.2044-8279.1981.tb02474.x
- Tripp, T., & Rich, P. (2012). Using video to analyze one's own teaching. *British Journal of Educational Technology, 43*(4), 678–704.
- Ding, G., Liu, F., Yang, F., & Qin, K. (2026). Influence of coaching experience on in-game adaptability and decision-making among basketball coaches. *Scientific Reports, 16*, Article 6831. https://doi.org/10.1038/s41598-026-38226-y
- Jennett, P., & Affleck, L. (1998). Chart audit and chart stimulated recall as methods of needs assessment in continuing professional health education. *Journal of Continuing Education in the Health Professions, 18*(3), 163–171. https://doi.org/10.1002/chp.1340180306

#### Simulation interview

**Summary:** Experts work through a challenging scenario and explain how they would respond.

**Traditions:** Psychology / Cognitive Science; Knowledge Engineering / AI  
**Tags:** Cognitive Task Analysis

**Origins:** Militello and Hutton developed simulation interviews in the 1990s as part of ACTA, a toolkit funded by the U.S. Navy to make methods from naturalistic decision-making research accessible to training and system designers. The method builds on studies of how experts recognize cues and make decisions in realistic situations.

**Method:** Researchers present an expert with a challenging scenario. The expert reviews or works through it, then identifies major events and decision points. For each, the interviewer asks what the expert thought was happening, what they would do, which cues informed their judgment, what alternatives they considered, and what mistakes a novice might make.

**Example:** Pickup and colleagues (2019) presented 12 doctors, nurses, and midwives with a hypothetical newborn resuscitation case. The baby was not breathing and had a heart rate below 60 beats per minute. Assisted breaths failed to move the chest, and the heart rate remained low after compressions. At each stage, participants explained what they would do, what information they needed, and what mistakes inexperienced clinicians might make. Their answers informed requirements for a new heart rate monitor.

**References**

- Militello, L. G., & Hutton, R. J. B. (1998). Applied cognitive task analysis (ACTA): A practitioner's toolkit for understanding cognitive task demands. *Ergonomics, 41*(11), 1618–1641. https://doi.org/10.1080/001401398186108
- Pickup, L., Lang, A., Shipley, L., Henry, C., Carpenter, J., McCartney, D., Butler, M., Hayes-Gill, B., & Sharkey, D. (2019). Development of a clinical interface for a novel newborn resuscitation device: Human factors approach to understanding cognitive user requirements. *JMIR Human Factors, 6*(2), e12055. https://doi.org/10.2196/12055

## Tasks
*Participants do an activity that reveals their knowledge.*

### Mapping
*Participants make explicit representations of concepts, relationships, or steps.*

#### Repertory grid

**Summary:** Experts compare examples in groups of three, identifying how two are alike and different from the third.

**Traditions:** Psychology / Cognitive Science; Knowledge Engineering / AI

**Origins:** Developed by clinical psychologist George Kelly in the 1950s as part of Personal Construct Theory, which proposed that people understand the world through categories and distinctions they construct. Originally used in psychotherapy to study how people perceived themselves and others. Adopted in 1980s knowledge engineering to elicit experts' categories and decision criteria.

**Method:** The researcher selects examples from a domain, such as tasks, people, or cases. The expert examines three examples at a time and identifies how two are alike and different from the third. The researcher records both ends of the distinction and repeats with other groups of three. The expert then rates all examples against each distinction, producing a grid.

**Example:** Tomico and colleagues (2009) studied how 17 Dutch and 16 Japanese industrial designers evaluated pens. Each designer compared sets of three pens, identified a characteristic that distinguished one from the other two, and then rated all six pens on the characteristics they identified. Japanese designers emphasized writing comfort, balance, and functionality. Dutch designers emphasized appearance, novelty, and the image a pen conveys about its owner.

**References**

- Curtis, A. M., Wells, T. M., Lowry, P. B., & Higbee, T. (2008). An overview and tutorial of the repertory grid technique in information systems research. *Communications of the Association for Information Systems, 23*, 37–62. https://doi.org/10.17705/1CAIS.02303
- Kelly, G. A. (1955). *The psychology of personal constructs*. Norton.
- Fransella, F., Bell, R., & Bannister, D. (2004). *A manual for repertory grid technique* (2nd ed.). Wiley.
- Tomico, O., Karapanos, E., Lévy, P., Mizutani, N., & Yamanaka, T. (2009). The repertory grid technique as a method for the study of cultural differences. *International Journal of Design, 3*(3), 55–63.

#### Concept mapping

**Summary:** Participants draw concepts as nodes connected by labeled relationships.

**Traditions:** Psychology / Cognitive Science; Knowledge Engineering / AI

**Origins:** Joseph Novak developed concept mapping at Cornell in 1972 while studying changes in children's understanding of science. Drawing on David Ausubel's theory of meaningful learning, he used maps to represent relationships between ideas that were difficult to identify from interviews alone. Knowledge engineers adopted concept maps in the late 1980s and 1990s.

**Method:** The participant identifies the main concepts in a subject, writes them in nodes, and connects them with labeled lines. Each connection forms a statement, such as “thunderstorms produce lightning.” Participants typically start with a question to focus the map, place broader concepts above more specific ones, and revise the connections as their understanding develops.

**Example:** Coffey and colleagues (2002) interviewed nine U.S. Navy meteorologists about forecasting weather along Florida's Gulf Coast. They built 26 interconnected maps covering thunderstorms, fog, hurricanes, and local weather patterns, repeatedly reviewing them with experts to correct relationships and fill gaps. The maps informed updates to manuals and training materials for new forecasters.

**References**

- Novak, J. D., & Cañas, A. J. (2008). *The theory underlying concept maps and how to construct and use them* (Technical Report IHMC CmapTools 2006-01, Rev. 01-2008). Institute for Human and Machine Cognition.
- Novak, J. D., & Gowin, D. B. (1984). *Learning how to learn*. Cambridge University Press.
- Coffey, J. W., Hoffman, R. R., Cañas, A. J., & Ford, K. M. (2002). A concept map-based knowledge modeling approach to expert knowledge sharing. In *Proceedings of the IASTED International Conference on Information and Knowledge Sharing* (pp. 212–217).

#### Relational maps

**Summary:** Participants map people or organizations and their relationships.

**Traditions:** Sociology / Qualitative Research; Anthropology / Ethnography

**Origins:** Rooted in sociometry, developed by Jacob Moreno in the 1930s to study relationships using sociograms showing who was connected to whom. Later used in qualitative research to explore personal relationships and in participatory research to map organizational networks and influence.

**Method:** Participants identify people or organizations involved in their lives or a situation and draw how they relate. They may use distance to indicate closeness, lines to distinguish relationships, or other markings for importance and influence. Researchers ask why they arranged the map as they did.

**Examples:** Bagnoli (2009) asked teenagers to draw themselves at the center of a page and place important people closer or farther away. One teenager placed her mother and grandmother closest to herself.

Schiffer and Hauck (2010) worked with a water management board in northern Ghana. Members mapped organizations involved in managing the river basin, using colored lines to show who provided instructions, money, information, or advice, and stacks of counters to indicate influence. They compared maps to identify organizations that could help the board achieve its goals.

**References**

- Bagnoli, A. (2009). Beyond the standard interview: The use of graphic elicitation and arts-based methods. *Qualitative Research, 9*(5), 547–570. https://doi.org/10.1177/1468794109343625
- Schiffer, E., & Hauck, J. (2010). Net-Map: Collecting social network data and facilitating network learning through participatory influence network mapping. *Field Methods, 22*(3), 231–249. https://doi.org/10.1177/1525822X10374798

#### Timelines

**Summary:** Participants mark important events along a timeline and explain them.

**Traditions:** Sociology / Qualitative Research; Anthropology / Ethnography

**Origins:** Rooted in life history research, especially sociology's study of biographies in relation to social and historical events. Later used as a visual interviewing method.

**Method:** The participant draws a line representing a period, such as their life or career, and marks important events along it. They choose which events matter and where to position them. The researcher asks about the events, transitions, and connections between them.

**Example:** Sheridan and colleagues (2011) studied nine women who had lost substantial amounts of weight and maintained the loss for at least five years. Across four interviews, each woman worked with a researcher to plot her weight over time and mark events such as pregnancies, illnesses, weddings, and periods of binge eating.

**References**

- Adriansen, H. K. (2012). Timeline interviews: A tool for conducting life history research. *Qualitative Studies, 3*(1), 40–55. https://doi.org/10.7146/qs.v3i1.6272
- Sheridan, J., Chamberlain, K., & Dupuis, A. (2011). Timelining: Visualizing experience. *Qualitative Research, 11*(5), 552–569. https://doi.org/10.1177/1468794111413235

#### Task analysis

**Summary:** Experts break a task into steps, identifying the actions, decisions, and information required.

**Traditions:** Psychology / Cognitive Science; Knowledge Engineering / AI  
**Tag:** Cognitive Task Analysis
**Origins:** Task analysis has roots in early 20th-century studies of industrial work by Frederick Taylor and Frank and Lillian Gilbreth. Annett and Duncan developed Hierarchical Task Analysis in the 1960s for industrial training. Later cognitive task analysis methods examined the judgments and decisions involved in skilled work.

**Method:** Researchers ask experts to break a task into its major steps and identify the actions, decisions, and information required at each step. In ACTA task diagrams, experts identify three to six major steps and highlight those requiring difficult judgments. In Hierarchical Task Analysis, researchers break goals into smaller subtasks and specify their order and conditions. Other diagrams show how activities and information flow between people or systems, where tasks overlap, and where timing or resource constraints affect performance.

**Example:** Li and colleagues (2022) studied whether commercial aircraft could operate with one pilot instead of two. They recorded five flights and spoke with ten pilots about approach and landing. They divided landing into four phases and mapped the tasks and responsibilities of captains and first officers. The maps helped researchers consider which responsibilities could move to automation or ground support.

**References**

- Stanton, N. A. (2006). Hierarchical task analysis: Developments, applications, and extensions. *Applied Ergonomics, 37*(1), 55–79. https://doi.org/10.1016/j.apergo.2005.06.003
- Militello, L. G., & Hutton, R. J. B. (1998). Applied cognitive task analysis (ACTA): A practitioner's toolkit for understanding cognitive task demands. *Ergonomics, 41*(11), 1618–1641. https://doi.org/10.1080/001401398186108
- Annett, J., & Duncan, K. D. (1967). Task analysis and training design. *Occupational Psychology, 41*, 211–221.
- Li, M., Wang, M., Ding, D., & Wang, G. (2022). Development and evaluation of single pilot operations with the human-centered design approach. *Aerospace, 9*(10), 601. https://doi.org/10.3390/aerospace9100601

### Demonstrating
*Participants perform activities in natural or contrived settings.*

#### Naturalistic performance

##### Participant observation

**Summary:** Researchers observe participants in their everyday settings, sometimes joining their activities.

**Traditions:** Anthropology / Ethnography; Sociology / Qualitative Research

**Origins:** Rooted in anthropology's tradition of immersive fieldwork, particularly Bronisław Malinowski's work. Later widely used in sociology, including the Chicago School's studies of everyday social life.

**Method:** The researcher spends time where participants work or live, watches what they do, takes field notes, and may join everyday activities. Spradley describes three stages: descriptive observation to understand the setting, people, and activities; focused observation of practices that emerge as important; and selective observation of particular differences and patterns.

**Example:** Heath and Luff (1992) studied how London Underground control room staff coordinated train operations. They recorded employees working, conducted observations, and interviewed staff. Controllers and information assistants coordinated in part by overhearing colleagues' conversations and monitoring their movements, even when no message was addressed directly to them.

**References**

- Spradley, J. P. (1980). *Participant observation*. Holt, Rinehart and Winston.
- Heath, C., & Luff, P. (1992). Collaboration and control: Crisis management and multimedia technology in London Underground line control rooms. *Computer Supported Cooperative Work, 1*(1–2), 69–94. https://doi.org/10.1007/BF00752451

##### Shadowing

**Summary:** Researchers follow individuals through their daily activities.

**Traditions:** Sociology / Qualitative Research; Anthropology / Ethnography

**Origins:** Rooted in organizational and management studies, including mid-20th-century research observing how managers spent their working days. Later developed as a qualitative method for studying everyday work and decisions in context.

**Method:** The researcher follows one person through their normal workday, accompanying them between activities, meetings, and locations. They record what the person does, whom they interact with, interruptions, decisions, and changes in activity. They may ask brief questions during the day or conduct follow-up interviews.

**Example:** Perlow (1999) studied a software engineering team at a Fortune 500 company over nine months. She shadowed all 17 team members for at least half a day each and recorded every activity as it occurred. Engineers frequently interrupted one another to request help, making individual work difficult to finish. The workplace rewarded solving urgent problems, which kept the interruptions going.

**References**

- McDonald, S. (2005). Studying actions in context: A qualitative shadowing method for organizational research. *Qualitative Research, 5*(4), 455–473. https://doi.org/10.1177/1468794105056923
- Perlow, L. A. (1999). The time famine: Toward a sociology of work time. *Administrative Science Quarterly, 44*(1), 57–81. https://doi.org/10.2307/2667031

#### Contrived performance

##### Role-playing

**Summary:** Participants act out situations in assigned roles.

**Tradition:** Human-Computer Interaction / Design Research

**Origins:** Rooted in Scandinavian participatory design, drawing on theater, including Augusto Boal's Forum Theatre, and improvisation. Designers used role-playing to act out work situations and proposed technologies.

**Method:** Participants take assigned roles in a realistic or imagined situation and act out what they would say or do, sometimes using props or a mock environment. Researchers observe the actions and interactions, then discuss what happened. The group can repeat the scene using different tools or arrangements.

**Example:** Hornecker and colleagues (2002) staged two simulated neighborhood meetings about redesigning a bus route. Participants played roles including a college student, working mother, and elderly resident. They placed houses on a digital map, negotiated walking distances to stops, and proposed routes. One participant playing a single mother objected to a stop because getting her child there would be difficult.

**References**

- Brandt, E., & Grunnet, C. (2000). Evoking the future: Drama and props in user centered design. In *Proceedings of the Participatory Design Conference 2000*.
- Hornecker, E., Eden, H., & Scharff, E. (2002). “In MY situation, I would dislike THAAAT!” Role play as assessment method for tools supporting participatory planning. In *Proceedings of the Participatory Design Conference 2002*.

##### Wizard of Oz

**Summary:** Participants interact with a prototype secretly controlled by a researcher.

**Tradition:** Human-Computer Interaction / Design Research

**Origins:** Rooted in experimental psychology and human factors research on computer interfaces. John Kelley popularized the method in the 1980s to study interactions with technologies that did not yet work autonomously, including natural language interfaces.

**Method:** Participants interact with a prototype that appears to function on its own, but a hidden researcher controls some or all of its responses. Researchers record what participants say, do, and expect from the simulated system.

**Examples:** Gould and colleagues (1983) studied writing letters by speaking to a computer before reliable speech recognition was available. Participants dictated letters and saw words appear on a screen, believing the system recognized speech. A typist in another room actually entered the words. Researchers simulated recognition limits, including displaying “XXXX” for unknown words.

Brown and colleagues (2024) placed two robotic trash cans in a busy New York City plaza. Hidden operators steered them toward pedestrians and controlled their responses. Researchers watched people attract the robots' attention, put trash into them, and show others how the robots worked.

**References**

- Kelley, J. F. (1984). An iterative design methodology for user-friendly natural language office information applications. *ACM Transactions on Office Information Systems, 2*(1), 26–41. https://doi.org/10.1145/357417.357420
- Gould, J. D., Conti, J., & Hovanyecz, T. (1983). Composing letters with a simulated listening typewriter. *Communications of the ACM, 26*(4), 295–308. https://doi.org/10.1145/2163.358100
- Brown, B., Bu, F., Mandel, I., & Ju, W. (2024). Trash in motion: Emergent interactions with a robotic trashcan. In *Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems* (Article 591). https://doi.org/10.1145/3613904.3642610

##### Simulated task performance

**Summary:** Experts perform tasks in an environment that reproduces their work conditions.

**Traditions:** Psychology / Cognitive Science; Knowledge Engineering / AI

**Origins:** Rooted in experimental psychology and aviation research using flight simulators to study pilots. Later expanded to computer simulations and simplified environments for studying complex decisions without the risks or constraints of real tasks.

**Method:** Researchers build an environment that reproduces important parts of the expert's work, including equipment, information, time pressures, or changing conditions. Experts perform tasks in the simulation while researchers record actions, decisions, timing, and responses to unexpected events. Researchers can introduce problems or vary conditions across trials.

**Example:** Militello and colleagues (2023) had 102 anesthesiologists complete four simulated medical emergencies, followed by interviews. In one scenario, a patient developed breathing difficulties and low blood pressure after abdominal surgery. One physician initially suspected blood loss or insufficient medication, while another considered infection and sepsis. Interviews examined what each physician noticed, suspected, and did as the patient's condition deteriorated.

**References**

- Gray, W. D. (2002). Simulated task environments: The role of high-fidelity simulations, scaled worlds, synthetic environments, and laboratory tasks in basic and applied cognitive research. *Cognitive Science Quarterly, 2*, 205–227.
- Militello, L. G., Salwei, M. E., Reale, C., Sushereba, C., Slagle, J. M., Gaba, D., Weinger, M. B., Rask, J., Faiman, J., Andreae, M., Burden, A. R., & Anders, S. (2023). Adapting cognitive task analysis methods for use in a large sample simulation study of high-risk healthcare events. *Journal of Cognitive Engineering and Decision Making, 17*(4), 315–331. https://doi.org/10.1177/15553434231192283

##### Constrained-processing tasks

**Summary:** Experts perform familiar tasks under constraints, such as limited time or information.

**Traditions:** Psychology / Cognitive Science; Knowledge Engineering / AI

**Origins:** Draws on experimental studies of expertise, including experiments showing that chess masters can recognize and remember meaningful board positions after only a few seconds.

**Method:** Researchers give experts a familiar task but impose constraints, such as limited time, missing information, or a required judgment. Afterward, experts describe what they noticed and how they reasoned. Researchers examine which cues they used and how they made decisions without completing their usual process.

**Limited time.** Experts complete the task in far less time than it normally takes.

**Limited information.** Experts begin with only part of the information they normally use and may receive more as the task continues.

**Examples:** Hoffman (1987) describes experienced terrain analysts inspecting aerial photographs for two minutes, although the normal task could take hours or days. Immediately afterward, they described what they remembered and interpreted what the photographs showed.

Tolcott and colleagues (1989) gave pairs of Army intelligence analysts a simulated battlefield and asked which of three routes enemy forces would use. Analysts began with limited information, then received three rounds of reports, each with 15 pieces of information. They updated their predictions and confidence after each round and rated whether reports supported or contradicted their predictions.

**References**

- Hoffman, R. R. (1987). The problem of extracting the knowledge of experts from the perspective of experimental psychology. *AI Magazine, 8*(2), 53–67. https://doi.org/10.1609/aimag.v8i2.583
- Tolcott, M. A., Marvin, F. F., & Lehner, P. E. (1989). Expert decision-making in evolving situations. *IEEE Transactions on Systems, Man, and Cybernetics, 19*(3), 606–615. https://doi.org/10.1109/21.31066

##### Twenty questions

**Summary:** Experts ask questions to gather the information needed to solve a problem.

**Traditions:** Knowledge Engineering / AI; Psychology / Cognitive Science

**Origins:** Adapted from the guessing game Twenty Questions for expert-system knowledge acquisition in the early 1980s. Grover (1983) described it as a way to uncover how experts organize problems and which information they seek before making decisions.

**Method:** The researcher presents a problem but little or no initial information. The expert asks questions to obtain the information needed to solve it, and the researcher answers each one. Researchers record the questions and their order to examine what information the expert seeks and how they narrow down solutions.

**Examples:** Schweickert and colleagues (1987) gave an industrial lighting expert four hypothetical inspection problems, each requiring a different kind of lighting. She asked about properties such as surface texture and transparency to choose lights. Two researchers independently analyzed the questions and explanations, extracting 50 agreed rules.

Gopalan and colleagues (2020) presented 29 South African critical care physicians with two hypothetical ICU referrals. A researcher played the referring doctor and initially supplied no patient information. Physicians could ask up to 20 questions before deciding whether to admit the patient. They asked about age in 76% of cases and patient wishes in 10%. After seeing the full information, 10 of 29 changed at least one decision.

**References**

- Schweickert, R., Burton, A. M., Taylor, N. K., Corlett, E. N., Shadbolt, N. R., & Hedgecock, A. P. (1987). Comparing knowledge elicitation techniques: A case study. *Artificial Intelligence Review, 1*(4), 245–253. https://doi.org/10.1007/BF00142925
- Gopalan, P. D., Pershad, S., & Pillay, B. J. (2020). Decision-making in the ICU: An analysis of the ICU admission decision-making process using a '20 Questions' approach. *Southern African Journal of Critical Care, 36*(1). https://doi.org/10.7196/sajcc.2020.v36i1.398

#### Explanations

##### Contextual inquiry

**Summary:** Researchers observe people working while asking questions about their actions and decisions.

**Tradition:** Human-Computer Interaction / Design Research

**Origins:** Developed within Contextual Design, drawing on ethnographic fieldwork and apprenticeship. Researchers used it to understand people's work and gather requirements for software design.

**Method:** The researcher visits a person's workplace and watches them perform regular work. They take an apprentice role, treating the participant as the expert. The participant explains what they do, and the researcher interrupts with questions about decisions, tools, exceptions, and workarounds. The researcher shares interpretations that the participant can correct.

**Example:** All and Nourbakhsh (2001) studied interactions with live insects at a natural history museum to design a robot that would let visitors explore the insects' world up close. They conducted contextual inquiries with three museum staff members: a teenage docent, a guide running an insect-themed birthday party, and the head entomologist.

**References**

- Holtzblatt, K., & Jones, S. (1993). Contextual inquiry: A participatory technique for system design. In D. Schuler & A. Namioka (Eds.), *Participatory design: Principles and practices*. Lawrence Erlbaum Associates.
- All, S., & Nourbakhsh, I. R. (2001). Insect telepresence: Using robotic tele-embodiment to bring insects face-to-face with humans. *Autonomous Robots, 10*(2), 149–161. https://doi.org/10.1023/A:1008928012232

##### Think aloud protocols

**Summary:** Participants verbalize their thoughts while performing a task.

**Tradition:** Psychology / Cognitive Science  
**Tag:** Cognitive Task Analysis

**Origins:** Rooted in cognitive psychology, particularly Newell and Simon's research in the 1960s and 1970s on problem solving. Researchers used verbalizations during tasks to investigate reasoning, planning, and decisions that could not be observed directly.

**Method:** Participants perform a task while saying whatever comes to mind, including what they notice, consider, calculate, or decide. Researchers record and transcribe the speech, prompting participants to keep talking if they fall silent but avoiding questions that ask them to explain or justify their thoughts. Researchers analyze the statements in sequence to reconstruct how participants approached the task.

**Example:** Chi and colleagues (1981) compared how physicists and novices approached mechanics problems. Two physicists and two novices read 20 problems while thinking aloud about how they would solve them. For a falling block compressing a spring, an expert immediately considered conservation of energy, while a novice retrieved separate formulas for gravity and springs.

**References**

- Ericsson, K. A., & Simon, H. A. (1980). Verbal reports as data. *Psychological Review, 87*(3), 215–251. https://doi.org/10.1037/0033-295X.87.3.215
- van Someren, M. W., Barnard, Y. F., & Sandberg, J. A. C. (1994). *The think aloud method: A practical guide to modelling cognitive processes*. Academic Press.
- Chi, M. T. H., Feltovich, P. J., & Glaser, R. (1981). Categorization and representation of physics problems by experts and novices. *Cognitive Science, 5*(2), 121–152. https://doi.org/10.1207/s15516709cog0502_2

##### Expert commentary

**Summary:** One expert narrates another expert's task performance.

**Traditions:** Knowledge Engineering / AI; Psychology / Cognitive Science  
**Also called:** Collegial verbalization; concurrent observer narrative technique

**Origins:** Developed in 1980s knowledge engineering, drawing on think aloud protocols. It was used when speaking during a task would be difficult or interfere with performance: another expert explains the performer's actions instead.

**Method:** One expert performs a task while a second expert watches and gives a running commentary about what the performer is doing and why. Researchers record the commentary and analyze it for decisions, strategies, and knowledge. The performer can concentrate on the task without having to speak.

**Example:** Jansson and colleagues (2006) studied how Swedish train drivers use information to operate safely and on schedule. They recorded six drivers on four real routes with cameras showing tracks and signals, the driver's face and hands, and the automatic train control display. Seven other professional train drivers watched the recordings and narrated their colleagues' actions.

**References**

- McIlroy, R. C., & Stanton, N. A. (2011). Observing the observer: Non-intrusive verbalisations using the concurrent observer narrative technique. *Cognition, Technology & Work, 13*(2), 135–149. https://doi.org/10.1007/s10111-010-0160-5
- Jansson, A., Olsson, E., & Erlandsson, M. (2006). Bridging the gap between analysis and design: Improving existing driver interfaces with tools from the framework of cognitive work analysis. *Cognition, Technology & Work, 8*(1), 41–49. https://doi.org/10.1007/s10111-005-0018-4

### Judging
*Participants classify, sort, compare, rate, or make choices.*

#### Rating

**Summary:** Participants score examples on specified dimensions.

**Tradition:** Psychology / Cognitive Science

**Method:** The researcher presents examples, cases, or concepts and asks the expert to rate each on one or more dimensions, such as importance, difficulty, similarity, or likelihood. Researchers compare ratings across experts or examine which cases receive similar scores. Common response formats include the following.

**Likert scale.** Participants indicate agreement or disagreement using ordered response categories. Likert (1932) asked respondents to evaluate statements such as “The United States should have the largest military and naval air fleets in the world,” choosing Strongly Approve, Approve, Undecided, Disapprove, or Strongly Disapprove.

**Semantic differential.** Participants rate a word or concept along scales defined by opposing adjectives. Osgood (1952) studied the perceived meanings of words including *polite*, *eager*, and *burning* using scales such as strong–weak, active–passive, and hot–cold.

**Magnitude estimation.** Participants assign numerical values to perceived intensity. Stevens (1956) studied numerical estimates of how loud listeners perceived tones at different physical intensities.

**Rubric-based rating.** Participants assign scores using descriptions of performance at each level. Moskal (2000) presents a four-level holistic rubric for evaluating college students' written reports.

**References**

- Hoffman, R. R., Shadbolt, N. R., Burton, A. M., & Klein, G. (1995). Eliciting knowledge from experts: A methodological analysis. *Organizational Behavior and Human Decision Processes, 62*(2), 129–158. https://doi.org/10.1006/obhd.1995.1039
- Likert, R. (1932). A technique for the measurement of attitudes. *Archives of Psychology, 140*, 1–55.
- Osgood, C. E. (1952). The nature and measurement of meaning. *Psychological Bulletin, 49*(3), 197–237. https://doi.org/10.1037/h0055737
- Stevens, S. S. (1956). The direct estimation of sensory magnitudes: Loudness. *The American Journal of Psychology, 69*(1), 1–25. https://doi.org/10.2307/1418112
- Moskal, B. M. (2000). Scoring rubrics: What, when and how? *Practical Assessment, Research, and Evaluation, 7*(1), Article 3. https://doi.org/10.7275/a5vq-7q66

#### Sorting

**Summary:** Participants group examples according to shared characteristics.

**Traditions:** Psychology / Cognitive Science; Knowledge Engineering / AI; Human-Computer Interaction / Design Research

**Origins:** Rooted in psychology and George Kelly's Personal Construct Theory, which studies the categories people construct. Knowledge engineers used sorting in the 1980s and 1990s to elicit expert classifications for rule-based AI systems. It later became common in website navigation and information architecture research.

**Method:** Researchers give participants cards, pictures, or objects and ask them to group them using one characteristic at a time. Researchers ask which criterion participants used, repeat with different criteria, and compare where participants agree or disagree.

**Open sorting.** Participants choose the groups and explain them.

**Closed sorting.** Researchers specify categories or rules.

**Example:** Reese and colleagues (2018) studied how clinicians organize patient information to improve electronic health records. Thirty-nine ICU clinicians openly sorted 29 patient data elements, including vital signs, lab results, medications, and notes. They grouped information into categories such as cardiovascular, respiratory, neurological, and infectious disease information. Researchers used the groups to propose a structure for ICU displays.

**References**

- Rugg, G., & McGeorge, P. (1997). The sorting techniques: A tutorial paper on card sorts, picture sorts and item sorts. *Expert Systems, 14*(2), 80–93. https://doi.org/10.1111/1468-0394.00045
- Rugg, G., Corbridge, C., Major, N. P., Burton, A. M., & Shadbolt, N. R. (1992). A comparison of sorting techniques in knowledge acquisition. *Knowledge Acquisition, 4*(3), 279–291. https://doi.org/10.1016/1042-8143(92)90005-T
- Reese, T., et al. (2018). Patient information organization in the intensive care setting: Expert knowledge elicitation with card sorting methods. *Journal of the American Medical Informatics Association, 25*(8), 1026–1035. https://doi.org/10.1093/jamia/ocy045

#### Comparative judgment

**Summary:** Participants compare pairs of examples on a specified dimension.

**Traditions:** Psychology / Cognitive Science; Knowledge Engineering / AI

**Origins:** Comparative judgment originated in experimental psychology and psychophysics, the study of perceived differences between stimuli. Thurstone extended comparisons of physical properties, such as weight and shades of gray, to subjective qualities including handwriting and drawing quality.

**Method:** Researchers present two specimens at a time and ask which is better, greater, more likely, or more representative on a specified dimension. They collect judgments across multiple pairs and use the results to estimate a scale of perceived quality. Thurstone (1927) used handwriting samples as an example.

**Example:** Humphry and colleagues (2023) collected 324 student narrative writing samples. Teachers made 6,541 pairwise judgments about which piece demonstrated more advanced writing skills. A Bradley–Terry–Luce model converted the judgments into scale positions. Researchers selected eight samples at different quality levels for each year group to serve as assessment reference points.

**References**

- Thurstone, L. L. (1927). A law of comparative judgment. *Psychological Review, 34*(4), 273–286. https://doi.org/10.1037/h0070288
- Humphry, S., Adie, L., Maxwell, C., & Sappl, S. (2023). Using pairwise comparison and ordered exemplars as a basis for a novel method of standard setting in narrative writing. *Frontiers in Education, 8*, Article 1183695. https://doi.org/10.3389/feduc.2023.1183695

#### Q-sort

**Summary:** Participants arrange statements according to their level of agreement.

**Tradition:** Psychology / Cognitive Science

**Origins:** William Stephenson developed Q methodology in 1935. Trained in psychology and physics, he worked with Charles Spearman, a pioneer of factor analysis. While traditional factor analysis examines correlations between traits across people, Q methodology compares people's complete patterns of responses.

**Method:** Researchers prepare statements about a topic. Each participant sorts them according to a question, commonly from most agree to most disagree. Researchers compare complete sorts across participants to identify shared patterns of opinion and the statements that distinguish viewpoints.

**Example:** Bavin and colleagues (2020) studied attitudes toward reintroducing pine martens in Wales. They interviewed nine residents, collected 95 statements, and reduced them to 30. Twenty-nine other participants sorted the statements from −5 to +5. The researchers identified four viewpoints: Environmental Protectionist, Natural Resource Steward, Cautious Pragmatist, and Concerned Manager. Three broadly supported reintroduction for different reasons; the fourth opposed it, particularly over farming and predators.

**References**

- Brown, S. R. (1993). A primer on Q methodology. *Operant Subjectivity, 16*(3/4), 91–138. https://doi.org/10.15133/j.os.1993.002
- Bavin, D., MacPherson, J., Denman, H., Crowley, S. L., & McDonald, R. A. (2020). Using Q-methodology to understand stakeholder perspectives on a carnivore translocation. *People and Nature, 2*(4), 1117–1130. https://doi.org/10.1002/pan3.10139

#### Delphi

**Summary:** Experts independently provide judgments, review aggregated responses, and reconsider their answers across rounds.

**Tradition:** Decision Science / Operations Research

**Origins:** Developed at the RAND Corporation in the early 1950s. It grew out of operations research and forecasting, where researchers needed predictions based on expert judgment when data were limited.

**Method:** Researchers assemble a panel of experts and ask them to independently suggest ideas, judgments, or concerns, often through an open-ended questionnaire. They combine responses into items for experts to rate or rank, then summarize the results and disagreements. Experts reconsider their answers in another round. The process can repeat to examine agreement, disagreement, and changes after feedback.

**Example:** Dalkey and Helmer (1963) asked seven experts, including economists, a systems analyst, and an electronics engineer, to estimate how many atomic bombs would reduce Soviet munitions production by a specified amount in a hypothetical war. Initial estimates differed sharply, from 50 to 5,000. Researchers asked about assumptions and information needed, supplied data on industrial production and World War II bombing damage, and invited revised estimates. Estimates converged, though the study could not establish which were correct.

**References**

- Hsu, C., & Sandford, B. A. (2007). The Delphi technique: Making sense of consensus. *Practical Assessment, Research, and Evaluation, 12*(1), Article 10. https://doi.org/10.7275/pdz9-th90
- Dalkey, N., & Helmer, O. (1963). An experimental application of the Delphi method to the use of experts. *Management Science, 9*(3), 458–467. https://doi.org/10.1287/mnsc.9.3.458

### Creating
*Participants create materials or designs.*

#### Cultural probes

**Summary:** Participants complete creative activities in their everyday lives using materials provided by researchers.

**Tradition:** Human-Computer Interaction / Design Research

**Origins:** Rooted in artistic practices associated with the Situationists, Surrealists, and Dadaists, later adapted for interaction design. Gaver and colleagues described probes as a source of “inspiration, not information.”

**Method:** Researchers prepare a package of activities that participants complete in their everyday lives and return. Materials can include postcards with questions, maps to mark, cameras with photography assignments, and diaries. Researchers examine what participants produce to inspire further investigation and design.

**Example:** In the Presence Project, Gaver and colleagues (1999) explored how technology could help older adults in Norway, the Netherlands, and Italy participate in their communities. Participants received stamped postcards with questions, maps and stickers for marking places where they met people or wanted to visit, disposable cameras with assignments, and diaries. Some maps also asked participants to mark places to be alone, daydream, or identify local landmarks and places where people injected drugs.

**Reference**

- Gaver, B., Dunne, T., & Pacenti, E. (1999). Cultural probes. *interactions, 6*(1), 21–29. https://doi.org/10.1145/291224.291235

#### Participatory drawing

##### Artwork

**Summary:** Participants draw their experiences or understanding of a topic.

**Tradition:** Sociology / Qualitative Research

**Origins:** Draws on anthropology's use of visual materials to understand people's lives, psychology's use of children's drawings, and sociology's use of images to document social life.

**Method:** The researcher asks a participant to draw something relevant to the research question, such as how they experience an illness, see themselves, or understand a situation. The participant chooses what to depict and how. The researcher then asks them to explain the drawing and its elements.

**Examples:** Guillemin (2004) interviewed participants attending menopause clinics and patients with heart disease about their experiences. She then gave them blank cards and colored felt pens and asked them to draw how they visualized their condition. Participants explained their drawings afterward.

Literat (2013) described drawing activities in The Modern Story, a digital storytelling program in Indian public schools. Asked what her community looked like, a 13-year-old drew wealthy landowners in a large house at the top, her family in a modest house with animals, and Dalit families as small figures without a house. In another exercise, students drew self-portraits before and after the course; one after drawing showed a student outdoors with her smiling parents.

**References**

- Guillemin, M. (2004). Understanding illness: Using drawings as a research method. *Qualitative Health Research, 14*(2), 272–289. https://doi.org/10.1177/1049732303260445
- Literat, I. (2013). “A pencil for your thoughts”: Participatory drawing as a visual research method with children and youth. *International Journal of Qualitative Methods, 12*(1), 84–98. https://doi.org/10.1177/160940691301200143

##### Maps (participatory mapping)

**Summary:** Participants draw or annotate maps of familiar places.

**Traditions:** Anthropology / Ethnography; Sociology / Qualitative Research

**Method:** Researchers ask community members to draw maps of a familiar area or annotate existing maps, marking locations, resources, boundaries, routes, or problems. Researchers ask participants to explain their markings and record the discussions.

**Reference**

- Chambers, R. (2006). Participatory mapping and geographic information systems: Whose map? Who is empowered and who disempowered? Who gains and who loses? *The Electronic Journal of Information Systems in Developing Countries, 25*(1), 1–11. https://doi.org/10.1002/j.1681-4835.2006.tb00163.x

#### Participatory design

**Summary:** Participants collaborate with designers to develop or improve systems.

**Tradition:** Human-Computer Interaction / Design Research

**Origins:** Developed in Scandinavia during the 1970s and 1980s through workplace democracy and cooperative systems design. Researchers involved workers in designing the tools they would use to understand their work practices, needs, priorities, and ideas for future work.

**Method:** People who will use a proposed system or service work with researchers and designers to develop it. Depending on the project, they identify problems with current tools, sketch alternatives, build mockups, act out situations, or evaluate prototypes. Researchers use their designs and responses to revise the system.

**References**

- Spinuzzi, C. (2005). The methodology of participatory design. *Technical Communication, 52*(2), 163–174.
- Schuler, D., & Namioka, A. (Eds.). (1993). *Participatory design: Principles and practices*. Lawrence Erlbaum Associates.

##### Participatory design workshops

**Summary:** Participants collectively identify problems and develop design proposals.

**Tradition:** Human-Computer Interaction / Design Research  
**Broader approach:** Participatory design

**Method:** Participants work together to identify problems, generate ideas, develop designs, and refine proposals, often across several sessions.

**Example:** Reddy and colleagues (2019) wanted to improve medication safety for older adults using over-the-counter medicines. They organized six participatory design sessions with pharmacy staff and patients. Participants identified barriers, proposed solutions, narrowed and combined ideas, developed an intervention, reacted to a prototype, and refined it.

**Reference**

- Reddy, A., Lester, C. A., Stone, J. A., Holden, R. J., Phelan, C. H., & Chui, M. A. (2019). Applying participatory design to a pharmacy system intervention. *Research in Social and Administrative Pharmacy, 15*(11), 1358–1367. https://doi.org/10.1016/j.sapharm.2018.11.012

##### Future workshops

**Summary:** Participants critique current problems, imagine ideal futures, and plan feasible actions.

**Tradition:** Human-Computer Interaction / Design Research  
**Broader approach:** Participatory design

**Origins:** Developed to allow ordinary citizens to envision and shape social change. Future workshops were later used in cooperative systems design.

**Method:** A future workshop has three phases. In **critique**, participants identify problems, write criticisms on paper or sticky notes, group them by theme, and select issues to address. In **fantasy**, they imagine possibilities without worrying about feasibility, using brainstorming, stories, drawings, or role-playing. In **implementation**, they review the visions, assess feasibility, choose ideas, and develop actions or proposals.

**Example:** Ursin and colleagues (2021) held a two-day climate workshop in Norway with 38 young people aged 10–18 to gather ideas for a county climate strategy.

**References**

- Kensing, F., & Madsen, K. H. (1991). Generating visions: Future workshops and metaphors. In J. Greenbaum & M. Kyng (Eds.), *Design at work: Cooperative design of computer systems* (pp. 155–168). Lawrence Erlbaum Associates.
- Jungk, R., & Müllert, N. R. (1987). *Future workshops: How to create desirable futures*. Institute for Social Inventions.
- Ursin, M., Lorgen, L. C., Ortega Alvarado, I. A., Smalsundmo, A.-L., Nordgård, R. C., Bern, M. R., & Bjørnevik, K. (2021). Promoting intergenerational justice through participatory practices: Climate workshops as an arena for young people’s political participation. *Frontiers in Psychology, 12*, Article 727227. https://doi.org/10.3389/fpsyg.2021.727227

##### Generative toolkits

**Summary:** Participants arrange provided visual materials into collages or models to express their ideas.

**Tradition:** Human-Computer Interaction / Design Research  
**Broader approach:** Participatory design

**Origins:** Developed within participatory design. In an early 1980s project to design a voice-controlled headset for preschool children, Sanders used activities such as coloring pictures of headsets, selecting among nine painted headsets, and constructing objects. This led toward toolkits that let people express ideas visually without training as designers.

**Method:** Researchers prepare a set of materials, such as photographs, stickers, colored shapes, words, and sketches, that participants can select, combine, rearrange, and extend. Participants respond to a prompt about an experience, their understanding of a situation, or something they want in the future. They arrange the materials into a collage, map, story, or model and explain what they made. Researchers use the artifacts to understand participants' ideas or begin designing with them.

**Examples:** Sanders (2000) describes activities for representing health experiences and mapping an ideal pet store.

Sanders and Stappers (2008) describe nurses arranging shapes to show an ideal workflow on a patient floor, then using 3D models to develop a new pod design for the hospital layout.

**References**

- Sanders, E. B.-N. (2000). Generative tools for co-designing. In S. A. R. Scrivener, L. J. Ball, & A. Woodcock (Eds.), *Collaborative design* (pp. 3–12). Springer. https://doi.org/10.1007/978-1-4471-0779-8_1
- Sanders, E. B.-N., & Stappers, P. J. (2008). Co-creation and the new landscapes of design. *CoDesign, 4*(1), 5–18. https://doi.org/10.1080/15710880701875068

##### PICTIVE

**Summary:** Participants collaboratively construct interface mockups using paper and movable elements.

**Tradition:** Human-Computer Interaction / Design Research  
**Broader approach:** Participatory design

**Method:** The researcher brings users and designers together around a shared workspace. They use paper, sticky notes, labels, markers, and prepared interface elements to construct a proposed screen or system. Participants move, replace, and annotate elements while discussing how the interface should work. Sessions are recorded on video so the team can revisit design decisions and explanations.

**Example:** Osman and Hwang (2021) asked 20 adults aged 52–75 with online shopping experience to design shopping pages. Each received a paper browser window and cutouts for product images, prices, descriptions, reviews, quantity selectors, and add-to-cart buttons. They designed one page for buying carrots, a relatively inexpensive purchase, and one for buying a wheelchair, a more expensive purchase. Participants could create missing elements using blank paper or sticky notes.

**References**

- Muller, M. J. (1991). PICTIVE: An exploration in participatory design. In *Proceedings of CHI ’91* (pp. 225–231). https://doi.org/10.1145/108844.108896
- Osman, R., & Hwang, F. (2021). E-commerce design by older adults: The selection and placement of web objects on shopping sites. *Frontiers in Computer Science, 3*, Article 631241. https://doi.org/10.3389/fcomp.2021.631241

---