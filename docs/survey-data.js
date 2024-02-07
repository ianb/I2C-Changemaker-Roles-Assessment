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
    ...engage in public forums and discussions.	Advocate	1
...work towards changes in policies and legislation	Advocate	1
...mobilize resources for causes.	Advocate	1
...rally public support for causes.	Advocate	1
...facilitate conversations between diverse groups to foster understanding.	Bridger	1
...create connections between individuals or groups who might not naturally intersect	Bridger	1
...help build trust and respect across different social divides	Bridger	1
...Identify issues that resonate across divided groups and work together to address them.	Bridger	1
...translate visionary ideas into actionable plans.	Builder	1
...lead projects that materialize innovative concepts.	Builder	1
...collaborate to develop new structures or systems.	Builder	1
...innovate within existing frameworks to improve efficiency and sustainability	Builder	1
...actively listen and provide emotional support to those in need.	Carer	1
...advocate for self-care and the well-being of my community.	Carer	1
...educate others on the importance of empathy and compassion.	Carer	1
...create safe spaces for healing and personal growth.	Carer	1
...inspire others to take action towards social change.	Catalyst	1
...generate momentum within movements to amplify or accelerate the pace of change.	Catalyst	1
...navigate obstacles that emerging movements face with resilience and resourcefulness.	Catalyst	1
...create a sense of urgency around the movement’s goals.	Catalyst	1
...express my vision through art, literature, or technology.	Creator	1
...produce work that communicates my unique perspectives, emotions, and insights	Creator	1
...produce work that offers new ways for others to see and understand the world.	Creator	1
...embrace failure as part of the creative process	Creator	1
...challenge established norms and systems.	Disrupter	1
...propose radical solutions to induce significant changes.	Disrupter	1
...disrupt the status quo with innovative products or business models.	Disrupter	1
...actively drive change, even when it makes other uncomfortable	Disrupter	1
...support others through significant transitions, whether welcomed or unwelcome,	Doula	1
...help people see both the gains and losses in major transitions	Doula	1
...help people recognize, experience, and honor complex feelings during significant transitions	Doula	1
...help people adopt proactive coping strategies to increase their resilience when navigating transitions	Doula	1
...critically analyze moral implications of actions and decisions.	Ethicist	1
...advocate for ethical principles in personal and professional spheres.	Ethicist	1
...help others develop guidelines to navigate ethical dilemmas.	Ethicist	1
...help individuals and organizations hold themselves accountable to high ethical standards.	Ethicist	1
...provide direction and advice based on wisdom and experience.	Guide	1
...help others navigate their paths with insight and foresight.	Guide	1
...mentor individuals seeking personal or professional growth.	Guide	1
...share knowledge to empower and enlighten others who are seeking guidance	Guide	1
...facilitate healing processes for physical, emotional, mental, and spiritual well-being.	Healer	1
...use holistic approaches to restore balance and harmony.	Healer	1
...provide a compassionate presence and listening ear to those in pain.	Healer	1
...integrate traditional and modern healing techniques to address individual and collective needs.	Healer	1
...create environments where everyone feels valued and included.	Host	1
...facilitate gatherings that encourage connection and community.	Host	1
...provide hospitality that makes people feel at home.	Host	1
...proactively address potential issues to maintain a sense of community and belonging.	Host	1
...use humor to highlight social and political issues.	Jester	1
...provoke thought through satire and comedic critique.	Jester	1
...challenge authority and norms with wit and irony.	Jester	1
...making complex ideas accessible and entertaining through humor.	Jester	1
...preserve cultural heritage and traditions for future generations.	Keeper	1
...protect resources and diversity through conservation efforts.	Keeper	1
...Maintain artifacts, teachings, and practices that hold historical significance.	Keeper	1
...advocate for policies and practices that ensure the longevity of precious assets.	Keeper	1
...use spiritual insight and practices to support individual and collective change.	Lightworker	1
...support to those seeking to deepen their spiritual understanding and connection.	Lightworker	1
...seek the knowledge and understanding of spiritual traditions, teachings, and philosophies.	Lightworker	1
...create spaces for open dialogue about spiritual experiences, doubts, and insights.	Lightworker	1
...facilitate dialogue to find common ground among disputing parties.	Negotiator	1
...employ diplomacy to resolve conflicts and reach agreements.	Negotiator	1
...balance competing interests to achieve mutually beneficial outcomes.	Negotiator	1
...advocate for fairness and equity in negotiations when making decisions.	Negotiator	1
...identify trends and correlations within complex data sets.	Pattern Spotter	1
...anticipate future developments by analyzing current patterns.	Pattern Spotter	1
...inform strategic decisions by seeing multiple possible strategic pathways.	Pattern Spotter	1
...leverage patterns to predict and adapt to changing environments.	Pattern Spotter	1
...design comprehensive strategies to achieve long-term goals.	Planner	1
...organize resources and schedules for optimal efficiency.	Planner	1
...anticipate challenges and develop contingency plans.	Planner	1
...facilitate the execution of complex projects.	Planner	1
...handle crises effectively.	Responder	1
...collaborate with teams to ensure coordinated responses to an immediate crisis.	Responder	1
...assess situations rapidly and decide on the best course of action.	Responder	1
...help calm and reassure victims and their families in a crisis.	Responder	1
...weave narratives that connect with people on an emotional level.	Storyteller	1
...inspire action and change through the power of narrative.	Storyteller	1
...utilize the power of stories to evoke strong emotional responses that can motivate individuals to change their attitudes, beliefs, or behaviors.	Storyteller	1
...share stories as direct calls to action	Storyteller	1
...envision futures that transcend current limitations.	Visionary	1
...inspire others to believe in and work towards a future possibility.	Visionary	1
...lead by example by demonstrating faith in what’s possible	Visionary	1
...communicate future possibilities in a way that motivates and galvanizes support.	Visionary	1
...connect individuals and communities to build stronger networks.	Weaver	1
...integrate diverse elements into a cohesive whole.	Weaver	1
...enrich the social fabric by deepening inclusivity and mutual support.	Weaver	1
...craft strategies that reinforce community resilience and solidarity.	Weaver	1
    `)
  }
];
