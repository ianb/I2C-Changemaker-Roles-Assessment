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
      I seek opportunities to engage in public forums and discussions.
Actively work towards changes in policies and legislation
Mobilize resources for causes.
Rally public support for causes.
Foster understanding between divided people or groups.
Create connections between individuals or groups who do not naturally engage with each other.
Build trust across different social divides
Help divided people or groups work together.
Translate visionary ideas into actionable plans.
Make sure the details are considered and taken care of.
Methodically develop and document systems to bring ideas into reality.
Improve efficiency and sustainability is systems.
Provide emotional support to those in need.
Care for the well-being of my community.
Offer empathy and compassion as a stragegy for change.
Create safe spaces for people and groups to experience personal growth.
Inspire others to take action towards social change.
Generate momentum to amplify or accelerate the pace of change.
Navigate obstacles that might slow down the pace of change.
Create a sense of urgency for change.
Express my vision through art, literature, or technology.
Produce art or cultural pieces that communicate perspectives, emotions, and insights.
Produce art or cultural pieces that offer new ways for others to see the world.
Produce art or cultural pieces because I feel driven to do so.
Directly challenge people who hold established norms and systems in place.
Generate radical solutions to for significant change.
Disrupt the status quo with innovative products or business models.
Drive change, even when it makes other uncomfortable
Support others through significant transitions, whether welcomed or unwelcome,
Help people see both the gains and losses in major transitions
Help people recognize, experience, and honor complex feelings during significant transitions
Help people adopt proactive coping strategies to increase their resilience when navigating transitions
Critically analyze moral implications of actions and decisions.
Advocate for ethical principles in my personal and professional spheres.
Help others develop guidelines to navigate ethical dilemmas.
Assist individuals and organizations in holding themselves accountable to high ethical standards.
Provide direction and advice based on my wisdom and experience.
Help others navigate their paths with insight and foresight.
Mentor individuals seeking personal or professional growth.
Share my knowledge to empower and enlighten others who are seeking guidance.
Facilitate healing processes for physical, emotional, mental, and spiritual well-being.
Use holistic approaches to restore balance and harmony.
Provide a compassionate presence and listening ear to those in pain.
Integrate traditional and modern healing techniques to address individual and collective needs.
Create environments where everyone feels valued and included.
Facilitate gatherings that encourage connection and community.
Provide hospitality that makes people feel at home.
Proactively address potential issues to maintain a sense of community and belonging.
Use humor to highlight social and political issues.
Use satire and comedic critique to provoke engagement.
Use comedy to challenge authority and norms.
Use humor to make complex ideas accessible.
Preserve cultural heritage and traditions for future generations.
Protect resources and diversity through conservation efforts.
Maintain artifacts, teachings, and practices that hold cultural or historical significance.
Work towards the care and protection of precious assets.
Use spiritual insight and practices to support individual and collective change.
Offer support to those seeking to deepen their spiritual understanding and connection.
Seek the knowledge and understanding of spiritual traditions, teachings, and philosophies.
Create spaces for open dialogue about spiritual experiences, doubts, and insights.
Facilitate dialogue to find common ground among disputing parties.
Employ diplomacy to resolve conflicts.
Balance competing interests to resolve a disagreement.
Help people equitably realize mutually beneficial outcomes.
Identify trends and correlations within complex data sets.
Anticipate future possibilities by analyzing current patterns.
Envisioning multiple possible strategic pathways towards change.
Use pattern-spotting to predict and adapt to changing environments.
Design comprehensive strategies to get us from "point a" to "point b".
Organize resources and schedules for optimal efficiency.
Ensure everyone knows what role they play in effectively executing a plan.
Plan for effective resource use in the short- and long-term.
Handle urgent and emergent crises effectively.
Coordinate responses to urgent and emergent crises.
Assess situations rapidly and decide on the best course of action.
Calm and reassure victims and their families in a crisis.
Generate narratives that connect with people on an emotional level.
Inspire action through the power of story.
Utilize the power of stories to change people's hearts and minds.
Share stories as direct "calls to action".
Create visions of futures that transcend current limitations.
Inspire others to believe in and work towards a better future
Lead by example, demonstrating faith in what’s possible.
Motivate and galvanize support towards a vision.
Connect individuals and communities to build stronger networks.
Integrate diverse elements into a cohesive whole.
Enrich the social fabric by deepening inclusivity and mutual support.
Facilitate engagements that reinforce community resilience and solidarity.
    `)
  }
];
