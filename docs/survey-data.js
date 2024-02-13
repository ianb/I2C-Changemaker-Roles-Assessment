function parseData(s) {
  const result = [];
  for (const line of s.split("\n")) {
    if (!line.trim()) {
      continue;
    }
    const [descriptor, role, dir] = line.trim().split("\t");
    result.push({
      descriptor,
      role,
      dir: parseInt(dir, 10),
    });
  }
  return result;
}

window.orderedData = [
  {
    version: 1,
    questions: parseData(`
     I seek opportunities to engage in public forums and discussions.	Advocate	1
Actively work towards changes in policies and legislation	Advocate	1
Mobilize resources for causes.	Advocate	1
Rally public support for causes.	Advocate	1
Foster understanding between divided people or groups.	Bridger	1
Create connections between individuals or groups who do not naturally engage with each other.	Bridger	1
Build trust across different social divides	Bridger	1
Help divided people or groups work together.	Bridger	1
Translate visionary ideas into actionable plans.	Builder	1
Make sure the details are considered and taken care of.	Builder	1
Methodically develop and document systems to bring ideas into reality.	Builder	1
Improve efficiency and sustainability is systems.	Builder	1
Provide emotional support to those in need.	Carer	1
Care for the well-being of my community.	Carer	1
Offer empathy and compassion as a stragegy for change.	Carer	1
Create safe spaces for people and groups to experience personal growth.	Carer	1
Inspire others to take action towards social change.	Catalyst	1
Generate momentum to amplify or accelerate the pace of change.	Catalyst	1
Navigate obstacles that might slow down the pace of change.	Catalyst	1
Create a sense of urgency for change.	Catalyst	1
Express my vision through art, literature, or technology.	Creator	1
Produce art or cultural pieces that communicate perspectives, emotions, and insights.	Creator	1
Produce art or cultural pieces that offer new ways for others to see the world.	Creator	1
Produce art or cultural pieces because I feel driven to do so.	Creator	1
Directly challenge people who hold established norms and systems in place.	Disrupter	1
Generate radical solutions to for significant change.	Disrupter	1
Disrupt the status quo with innovative products or business models.	Disrupter	1
Drive change, even when it makes other uncomfortable	Disrupter	1
Support others through significant transitions, whether welcomed or unwelcome,	Doula	1
Help people see both the gains and losses in major transitions	Doula	1
Help people recognize, experience, and honor complex feelings during significant transitions	Doula	1
Help people adopt proactive coping strategies to increase their resilience when navigating transitions	Doula	1
Critically analyze moral implications of actions and decisions.	Ethicist	1
Advocate for ethical principles in my personal and professional spheres.	Ethicist	1
Help others develop guidelines to navigate ethical dilemmas.	Ethicist	1
Assist individuals and organizations in holding themselves accountable to high ethical standards.	Ethicist	1
Provide direction and advice based on my wisdom and experience.	Guide	1
Help others navigate their paths with insight and foresight.	Guide	1
Mentor individuals seeking personal or professional growth.	Guide	1
Share my knowledge to empower and enlighten others who are seeking guidance.	Guide	1
Facilitate healing processes for physical, emotional, mental, and spiritual well-being.	Healer	1
Use holistic approaches to restore balance and harmony.	Healer	1
Provide a compassionate presence and listening ear to those in pain.	Healer	1
Integrate traditional and modern healing techniques to address individual and collective needs.	Healer	1
Create environments where everyone feels valued and included.	Host	1
Facilitate gatherings that encourage connection and community.	Host	1
Provide hospitality that makes people feel at home.	Host	1
Proactively address potential issues to maintain a sense of community and belonging.	Host	1
Use humor to highlight social and political issues.	Jester	1
Use satire and comedic critique to provoke engagement.	Jester	1
Use comedy to challenge authority and norms.	Jester	1
Use humor to make complex ideas accessible.	Jester	1
Preserve cultural heritage and traditions for future generations.	Keeper	1
Protect resources and diversity through conservation efforts.	Keeper	1
Maintain artifacts, teachings, and practices that hold cultural or historical significance.	Keeper	1
Work towards the care and protection of precious assets.	Keeper	1
Use spiritual insight and practices to support individual and collective change.	Lightworker	1
Offer support to those seeking to deepen their spiritual understanding and connection.	Lightworker	1
Seek the knowledge and understanding of spiritual traditions, teachings, and philosophies.	Lightworker	1
Create spaces for open dialogue about spiritual experiences, doubts, and insights.	Lightworker	1
Facilitate dialogue to find common ground among disputing parties.	Negotiator	1
Employ diplomacy to resolve conflicts.	Negotiator	1
Balance competing interests to resolve a disagreement.	Negotiator	1
Help people equitably realize mutually beneficial outcomes.	Negotiator	1
Identify trends and correlations within complex data sets.	Pattern Spotter	1
Anticipate future possibilities by analyzing current patterns.	Pattern Spotter	1
Envisioning multiple possible strategic pathways towards change.	Pattern Spotter	1
Use pattern-spotting to predict and adapt to changing environments.	Pattern Spotter	1
Design comprehensive strategies to get us from "point a" to "point b".	Planner	1
Organize resources and schedules for optimal efficiency.	Planner	1
Ensure everyone knows what role they play in effectively executing a plan.	Planner	1
Plan for effective resource use in the short- and long-term.	Planner	1
Handle urgent and emergent crises effectively.	Responder	1
Coordinate responses to urgent and emergent crises.	Responder	1
Assess situations rapidly and decide on the best course of action.	Responder	1
Calm and reassure victims and their families in a crisis.	Responder	1
Generate narratives that connect with people on an emotional level.	Storyteller	1
Inspire action through the power of story.	Storyteller	1
Utilize the power of stories to change people's hearts and minds.	Storyteller	1
Share stories as direct "calls to action".	Storyteller	1
Create visions of futures that transcend current limitations.	Visionary	1
Inspire others to believe in and work towards a better future	Visionary	1
Lead by example, demonstrating faith in what’s possible.	Visionary	1
Motivate and galvanize support towards a vision.	Visionary	1
Connect individuals and communities to build stronger networks.	Weaver	1
Integrate diverse elements into a cohesive whole.	Weaver	1
Enrich the social fabric by deepening inclusivity and mutual support.	Weaver	1
Facilitate engagements that reinforce community resilience and solidarity.	Weaver	1
    `)
  }
];
