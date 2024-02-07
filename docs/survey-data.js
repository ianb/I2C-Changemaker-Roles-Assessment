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
I actively work towards changes in policies and legislation
I mobilize resources for causes.
I rally public support for causes.
I facilitate foster understanding between divided people or groups.
I create connections between individuals or groups who do not naturally engage with each other.
I help build trust across different social divides
I help divided people or groups work together.
I translate visionary ideas into actionable plans.
I make sure the details are covered.
I methodically develop and document systems to bring ideas into reality.
I work to improve efficiency and sustainability is systems.
I provide emotional support to those in need.
I care for the well-being of my community.
I offer empathy and compassion as a stragegy for change.
I create safe spaces for people and groups to experience personal growth.
I inspire others to take action towards social change.
I generate momentum to amplify or accelerate the pace of change.
I navigate obstacles that might slow down the pace of change.
I create a sense of urgency for change.
I express my vision through art, literature, or technology.
I produce art or cultural pieces that communicate perspectives, emotions, and insights.
I produce art or cultural pieces that offer new ways for others to see the world.
I produce art or cultural pieces because I feel driven to do so.
I directly challenge established norms and systems.
I work towards radical solutions to induce significant changes.
I disrupt the status quo with innovative products or business models.
I actively drive change, even when it makes other uncomfortable
I support others through significant transitions, whether welcomed or unwelcome,
I help people see both the gains and losses in major transitions
I help people recognize, experience, and honor complex feelings during significant transitions
I help people adopt proactive coping strategies to increase their resilience when navigating transitions
I critically analyze moral implications of actions and decisions.
I advocate for ethical principles in my personal and professional spheres.
I help others develop guidelines to navigate ethical dilemmas.
I assist individuals and organizations in holding themselves accountable to high ethical standards.
I provide direction and advice based on my wisdom and experience.
I help others navigate their paths with insight and foresight.
I mentor individuals seeking personal or professional growth.
I share my knowledge to empower and enlighten others who are seeking guidance.
I facilitate healing processes for physical, emotional, mental, and spiritual well-being.
I use holistic approaches to restore balance and harmony.
I provide a compassionate presence and listening ear to those in pain.
I integrate traditional and modern healing techniques to address individual and collective needs.
I create environments where everyone feels valued and included.
I facilitate gatherings that encourage connection and community.
I provide hospitality that makes people feel at home.
I proactively address potential issues to maintain a sense of community and belonging.
I use humor to highlight social and political issues.
I provoke thought through satire and comedic critique.
I challenge authority and norms with wit and irony.
I make complex ideas accessible and entertaining through humor.
I preserve cultural heritage and traditions for future generations.
I protect resources and diversity through conservation efforts.
I maintain artifacts, teachings, and practices that hold historical significance.
I advocate for policies and practices that ensure the longevity of precious assets.
I use spiritual insight and practices to support individual and collective change.
I offer support to those seeking to deepen their spiritual understanding and connection.
I seek the knowledge and understanding of spiritual traditions, teachings, and philosophies.
I create spaces for open dialogue about spiritual experiences, doubts, and insights.
I facilitate dialogue to find common ground among disputing parties.
I employ diplomacy to resolve conflicts and reach agreements.
I balance competing interests to achieve mutually beneficial outcomes.
I advocate for fairness and equity in negotiations when making decisions.
I identify trends and correlations within complex data sets.
I anticipate future developments by analyzing current patterns.
I inform strategic decisions by envisioning multiple possible strategic pathways.
I leverage patterns to predict and adapt to changing environments.
I design comprehensive strategies to achieve long-term goals.
I organize resources and schedules for optimal efficiency.
I anticipate challenges and develop contingency plans.
I facilitate the execution of complex projects.
I handle crises effectively.
I collaborate with teams to ensure coordinated responses to immediate crises.
I assess situations rapidly and decide on the best course of action.
I help calm and reassure victims and their families in a crisis.
I weave narratives that connect with people on an emotional level.
I inspire action and change through the power of narrative.
I utilize the power of stories to evoke strong emotional responses and motivate change.
I share stories as direct calls to action.
I envision futures that transcend current limitations.
I inspire others to believe in and work towards a future possibility.
I lead by example, demonstrating faith in what’s possible.
I communicate future possibilities in a way that motivates and galvanizes support.
I connect individuals and communities to build stronger networks.
I integrate diverse elements into a cohesive whole.
I enrich the social fabric by deepening inclusivity and mutual support.
I craft strategies that reinforce community resilience and solidarity.
    `)
  }
];
