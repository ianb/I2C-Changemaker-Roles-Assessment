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
    I find fulfillment in championing the causes of the marginalized or underrepresented.	Advocates	1
    I feel a strong sense of duty to speak up for those who cannot speak for themselves.	Advocates	1
    Injustice deeply bothers me and compels me to take action.	Advocates	1
    I often use my voice or platform to rally people around a cause	Advocates	1
    In general, standing up for others is not my responsibility.	Advocates	-1
    I thrive in environments where I can connect people from different backgrounds.	Bridgers	1
    My friends often describe me as a "link" or "bridge" between diverse groups.	Bridgers	1
    I find it rewarding to help bridge the gap between conflicting viewpoints.	Bridgers	1
    I often introduce people to each other, seeing potential synergies.	Bridgers	1
    I find it challenging to relate to people who come from different backgrounds than mine.	Bridgers	-1
    I get a deep sense of satisfaction from making abstract ideas tangible.	Builders	1
    Whether it's a physical project or a social initiative, I love constructing from the ground up.	Builders	1
    I am passionate about turning innovative ideas into concrete realities and practical solutions	Builders	1
    I am persistent and see projects through until they are completed.	Builders	1
    I often feel overwhelmed by the idea of turning dreams into realities.	Builders	-1
    The suffering of others deeply affects me, and I feel compelled to alleviate it	Carers	1
    Providing support and comfort to people in distress is something I find fulfilling.	Carers	1
    Helping others brings me profound joy.	Carers	1
    In times of distress, my first instinct is to comfort and assist.	Carers	1
    Offering support and empathy isn't something I naturally gravitate towards.	Carers	-1
    I frequently find myself introducing new ideas that spur others into action.	Catalysts	1
    I am often the spark that initiates a chain reaction of events.	Catalysts	1
    I find I can shift the energy of groups, leading to an amplified magnitude of change.	Catalysts	1
    My enthusiasm is infectious and has a tendency to mobilize people around me.	Catalysts	1
    Sometimes the barriers are so great that change is not possible.	Catalysts	-1
    I am constantly generating new ideas and concepts that have never been tried before.	Creators	1
    I feel a strong urge to express myself through artistic	Creators	1
    I feel most alive when I'm crafting, designing, or making something from scratch.	Creators	1
    I tend to get restless if I'm not working on a creative project or endeavor.	Creators	1
    I struggle to understand the purpose of artistic and creative projects in social change.	Creators	-1
    I don't accept things just because "that's the way they've always been done."	Disrupters	1
    I actively challenge conventions and norms when the are outdated or oppressive.	Disrupters	1
    People might describe me as a rebel with a cause.	Disrupters	1
    I am not afraid to voice unpopular opinions if I believe they can lead to improvement.	Disrupters	1
    I tend to avoid confrontations and prefer to maintain harmony.	Disrupters	-1
    I naturally provide comfort and support to others during challenging transitions	Doulas	1
    I am often sought out for support through emotional or life-changing events.	Doulas	1
    I believe that being present and supportive during critical transitions is more important than offering solutions.	Doulas	1
    I believe that no one should have to navigate challenging life changes change in isolation, if they would prefer to be supported.	Doulas	1
    I think challenges as hurdles to overcome quickly.	Doulas	-1
    Moral considerations guide my decisions.	Ethicists	1
    I have a strong sense of moral and ethical principles.	Ethicists	1
    I am deeply troubled by unethical behaviors or actions.	Ethicists	1
    I am committed to upholding the moral integrity of my community.	Ethicists	1
    I sometimes find it challenging to identify ethical implications in complex situations.	Ethicists	-1
    Others often turn to me for advice or direction.	Guides	1
    Helping others find their way is immensely satisfying to me.	Guides	1
    I enjoy mentoring and guiding others in their personal or professional growth.	Guides	1
    I believe everyone can find their path with the right guidance.	Guides	1
    I usually prefer to focus on my own path rather than guide others.	Guides	-1
    I am drawn to situations where I can alleviate pain or distress.	Healers	1
    I prioritize holistic well-being—mind, body, and spirit.	Healers	1
    I am sensitive to the emotional and physical needs of others.	Healers	1
    I feel a deep sense of fulfillment when helping others heal.	Healers	1
    I often find it difficult to empathize with others' suffering.	Healers	-1
    I enjoy creating spaces where people feel welcomed and valued.	Hosts	1
    I am attentive to the needs and comfort of those around me.	Hosts	1
    Connecting individuals and facilitating meaningful interactions energizes me.	Hosts	1
    I am skilled at facilitating positive and inclusive social interactions.	Hosts	1
    I prefer being a guest in a welcoming space rather than creating welcoming spaces.	Hosts	-1
    I have a talent for using humor to communicate serious messages.	Jesters	1
    I am comfortable challenging norms and ideas through comedy.	Jesters	1
    I often use wit and satire to highlight important issues.	Jesters	1
    I am adept at reading my audience and adjusting my humor accordingly.	Jesters	1
    I find it challenging to balance humor with delivering critical messages.	Jesters	-1
    I hold a deep reverence for traditions and legacies.	Keepers	1
    Protecting and preserving are instincts for me, whether it's cultural heritage or natural resources.	Keepers	1
    I see the value in the wisdom of the past and its role in shaping the future.	Keepers	1
    I believe there's strength in remembering and honoring our roots.	Keepers	1
    I often struggle to see the relevance of old traditions in the modern world.	Keepers	-1
    I have a deep personal commitment to spiritual growth and enlightenment.	Lightworkers	1
    I am drawn to the ethereal, spiritual side of existence.	Lightworkers	1
    I feel a calling to help others on their spiritual journeys.	Lightworkers	1
    I feel a deep connection to a greater purpose that transcends my individual existence.	Lightworkers	1
    I am skeptical about the concept of spiritual growth and enlightenment.	Lightworkers	-1
    I excel in resolving conflicts through dialogue and understanding.	Negotiators	1
    I am skilled at finding common ground in challenging situations.	Negotiators	1
    I am adept at persuading others while respecting their viewpoints.	Negotiators	1
    I view compromise as a strength in achieving mutual agreements.	Negotiators	1
    I often become impatient when discussions do not lead to quick resolutions.	Negotiators	-1
    I have a knack for identifying trends and making connections that others might miss.	Pattern Spotters	1
    I can see the bigger picture, even when presented with a mass of data or information.	Pattern Spotters	1
    I regularly reflect on historical events to better understand and predict current system dynamics and potential changes.	Pattern Spotters	1
    When I recognize patterns in complex systems, I seek to understand their deeper causes and dynamics.	Pattern Spotters	1
    I tend to focus more on details and often miss the bigger picture.	Pattern Spotters	-1
    I excel in organizing, strategizing, and mapping out paths forward.	Planners	1
    Setting clear goals and devising ways to achieve them is second nature to me.	Planners	1
    I find joy in anticipating potential challenges and preparing for them.	Planners	1
    I believe that with the right plan, any vision can become reality.	Planners	1
    I rarely plan ahead and tend to act on impulse.	Planners	-1
    I instinctively jump into action when crises arise.	Responders	1
    My ability to think on my feet and provide immediate solutions is a strength.	Responders	1
    I am often recognized for my ability to think and act quickly under pressure.	Responders	1
    Quick, effective decision-making in high-pressure situations comes naturally to me.	Responders	1
    In high-pressure situations, I often freeze or feel overwhelmed.	Responders	-1
    Whether it's through words, visuals, or other mediums, I have a natural talent for crafting and telling engaging stories.	Storytellers	1
    Sharing stories to connect, educate, or influence is a passion of mine.	Storytellers	1
    I believe in the transformative power of a well-told tale.	Storytellers	1
    I often use storytelling as a tool for change, advocacy, or simply to bring joy.	Storytellers	1
    I often lose the audience's interest, when conveyibf messages through stories.	Storytellers	-1
    I can often see potentials and futures that others might not imagine.	Visionaries	1
    I'm driven by a deep sense of purpose and a desire to innovate.	Visionaries	1
    I inspire others to dream bigger and push boundaries.	Visionaries	1
    I am able to articulate my ideas for the future in a way that others find compelling and trustworthy.	Visionaries	1
    I prefer to focus on the present rather than envisioning new possibilities.	Visionaries	-1
    I have a talent for seeing connections and bringing diverse elements into a cohesive whole.	Weavers	1
    My goal is to create a tapestry of shared understanding and mutual respect.	Weavers	1
    I enjoy finding and creating synergies between different groups and perspectives.	Weavers	1
    I am committed to strengthening the social fabric through inclusive and cohesive practices.	Weavers	1
    I'm more of a solo player and don't prioritize building community.	Weavers	-1
    `)
  }
];
