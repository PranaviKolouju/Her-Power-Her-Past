import React from 'react';
import { Typography, Box, Container} from '@mui/material';
import Navbar from '../../Components/Navbar';
import './Post2.css';

const BlogPost2 = () => {
  const post = {
    title: "Her Search for Autonomy in The New World",
    description: "She seeks what society tells her she cannot have.",
    date: "October 26, 2024",
    author: "Pranavi Kolouju", 
    content: [ "A wave of immigration characterized the early 1900s in the United States. Immigrants, specifically female immigrants, sought out the United States for a variety of reasons such as educational pursuit, economic opportunity, and familial reunification. The vision for opportunity was oftentimes catalyzed by the movements in their own country. Whatever their reasoning, the legal constraints of the time did not make it easy for those wanting to immigrate. The Immigration Act of 1924, for example, prohibited Chinese wives from entering the country. Despite these restrictions, Chinese women still found a way to carve out these opportunities for themselves, breaking the shackles of long standing, gendered constraints. However, upon entering the new world, they were often met with many challenges. Many women suffered from economic exploitation, working through long hours and arduous conditions only to receive minimal and insufficient pay. Some were victims of sexual exploitation and were forced into prostitution. In her article “Unbound Feet: From China to San Francisco’s Chinatown”, Judy Yung details the story of Wong Ah So who was tricked into marriage as her husband sold her into prostitution upon her arrival to the United States (Yung 288). The story of Wong Ah So is a rather extreme yet candid reflection of the struggles that many young women faced in the new world.  While acknowledging these struggles, it is also important to recognize how women harnessed the opportunities in the new world to grant themselves autonomy. Women searched for autonomy through educational opportunity, the bending of traditional gender norms, and personal expression.",
      "Women weaponized the promise of education in the new land. Education was not only attained for personal fulfillment but was also used to defy the roles designated to immigrant women. Judy Yung conveys the story of one immigrant woman who used education to do just that. In her discussion of Jane Kwong Lee, she explains how “After earning her bachelor’s degree in sociology, she…returned to Mills College, where she received a master’s degree in sociology and economics in 1933. She then dedicated herself to community service, working many years as coordinator of the Chinese YWCA and as a journalist and translator for a number of Chinatown newspapers” (Yung 294). Lee used her education to cast her influence upon the immigrant community in San Francisco through her involvement in the Chinese YWCA. Additionally, her degrees enabled her to take on a career of her choosing that challenged the economic status of immigrant women, thereby granting her personal and economic autonomy. However, the Chinese Immigrant community was not the only group to benefit from education. In her article “The Flapper and the Chaperone: Mexican American Teenagers in the Southwest” by Vicki L. Ruiz, she explains the role that education played for Mexican American women. While the western education system attempted to assimilate them into western culture, punishing them when they spoke Spanish, smaller community learning centers nurtured their education. Ruiz emphasizes how “...Luna credited her love of reading to a Euro-American educator who had converted a small barrio house into a makeshift community center and library” (Ruiz 353). These centers encouraged personal autonomy through education where children could access knowledge independently and freely. Reading, in this case, was a way for Luna to express her interests, fostering her sense of self outside of culturally imposed norms placed upon women.",
      "Defying traditional, gendered norms was a new path to autonomy for immigrant women. One way of doing that was through gaining economic stature. Yung details the observations of Jane Kwong Lee: “As Jane Kwong Lee observed, having money to spend made the women feel more liberated in America than in China: ‘They can buy things for themselves, go out to department stores to choose their own clothes instead of sewing them’” (Yung 294). With profound economic opportunities, immigrant women were able to manage their own finances. This allowed them to be in charge of how they presented themselves. Additionally, it allowed them to systematically break away from the domestic sphere and be a part of the economic sphere, which was previously reserved to men. Therefore, economic status was a means of gaining personal and economic freedom for immigrant women as well as defying the confining roles that society has deemed appropriate for them. Economic opportunities allowed women to exert autonomy in other ways. For Mexican American women at the time, it was preferable to stay at home with their parents until they got married. As Ruiz explains, “Some women openly rebelled. They moved out of their family homes and into apartments. Considering themselves free- wheeling single women, they could go out with men unsupervised as was the practice among their Anglo peers” (Ruiz 355). With new economic opportunities, women were gaining more capital and had the financial resources to leave their family home and move out on their own. This was a great shift for Mexican American youth because it went against the expectations placed upon them by their communities. However, being under their own room meant that women were able to make their own decisions, granting them a new level of independence.",
      "Women also found ways to assert autonomy through their physical appearance, presenting their individuality and independence. One way in which immigrant women earned themselves personal autonomy was through fashion. As Yung mentions, “Soon after the 1911 Revolution in China, queues and foot binding were eliminated, tong wars and prostitution reduced, and more of Chinatown’s residents were dressing in Western clothing and adopting democratic ideas” (Yung 290). Chinese immigrant women engaged with western clothing and fashion, and oftentimes, that meant the forgoing of traditional, conservative clothing styles that were imposed upon them. This is an empowering example of how women expressed themselves and established their sense of self through how they dressed. However, this adaptation to western culture did not mean a complete dismissal of their culture. As Ruiz demonstrates, “The Mexican-American generation selected, retained, borrowed, and created their own cultural forms. Or as one woman informed anthropologist Ruth Tuck, ‘Fusion is what we want—the best of both ways’” (Ruiz 357). Mexican American teenagers, while experimenting with western fashion, cosmetics, etc., prioritized having the option to mix-and-match between these two, uniquely different pieces of their culture. However, the option to blend these cultural influences together becomes a form of autonomy, giving them the control to shape their own identity.",
      "And so, we have explored the ways in which women in the new world have sought out opportunities to break away from barriers that constrained them on the basis of gender. Many overcame challenges and instead found ways to empower themselves. These acts gave them more control over their lives across various sectors and also granted them improved status within society. They didn’t simply adapt to the new world, they worked towards gaining freedom and choice. What are other ways in which women of the new world progressed? What other methods they used to overcome traditional gender norms? What tools enabled them to earn this newfound freedom? While we acknowledge that many women were still held back by societal impositions, it is important to commemorate the progress of women in the new world."
    ],
    citations: ['Yung, Judy. 2019. “Unbound Feet: From China to San Francisco’s Chinatown.” In Women\'s America: Refocusing the Past, edited by Linda K. Kerber, Jane S. De Hart, Cornelia H. Dayton, and Karissa Haugeberg, 688. 9th ed. N.p.: Oxford University Press.', 'Ruiz, Vicki L. 2019. “The Flapper and the Chaperone: Mexican American Teenagers in the Southwest.” In Women\'s America: Refocusing the Past, edited by Linda K. Kerber, Jane S. De Hart, Cornelia H. Dayton, and Karissa Haugeberg, 688. 9th ed. N.p.: Oxford University Press.']
  };

  return (
    <div className="home">
      <Navbar />

      <Container maxWidth="lg">
      <Box className="centered-box-blog">
          {/* Post Title */}
          <Typography variant="h3" component="h1" gutterBottom className="main-title">
            {post.title}
          </Typography>

          {/* Post Description */}
          <Typography variant="body1" className="description-text" gutterBottom>
            {post.description}
          </Typography>

          {/* Author and Date */}
          <Typography variant="subtitle1" className="post-author-date">
            Written by {post.author} on {post.date}
          </Typography>

          {/* Main Content */}
          {post.content.map((paragraph, index) => (
            <Typography key={index} variant="body1" className="post-content" paragraph>
              {paragraph}
            </Typography>
          ))}

          <Typography variant="body1" className="post-citations">
            Citations
          </Typography>

          {/* Citations */}
          {post.citations.map((paragraph, index) => (
            <Typography key={index} variant="body1" className="post-citations" paragraph>
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default BlogPost2;