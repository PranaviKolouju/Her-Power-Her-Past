import React from 'react';
import { Typography, Box, Container} from '@mui/material';
import Navbar from '../../Components/Navbar';
import './Post3.css';

const BlogPost3 = () => {
  const post = {
    title: "Redefining Her Power as a Housewife",
    description: "She pushes past the bounds of tradition to influence society and politics.",
    date: "November 24, 2024",
    author: "Pranavi Kolouju", 
    content: [
        "The post World War 2 air in the United States manifested a new era of politics where women stood on the front lines. During these years, women were in some ways reverting back to their traditional roles and traditional family structures. Many women were forgoing or abandoning their education and were instead turning to marriage at an early age. They were having children at earlier ages, much earlier than the generations before them. They were also maintaining larger families with many children. Though the traditional role of a housewife was in many ways resurfacing, they were not the same powerless individuals confined within the bounds of domestic responsibilities. Instead, many housewives were engaging in political activism and using their voices to shape their communities. During the Cold War, housewives on both ends of the political spectrum reshaped their political roles by turning to activism. Feminists critiqued how limiting domestic life was, while conservative housewives used their traditional roles to gain political influence. Together, both groups of women challenged the norms of society and used their political standing and values to motivate change.",
        "Feminist housewives used their frustrations with domesticity to challenge societal expectations and to fight for greater opportunities for women. Betty Friedan left her academic ambitions behind and succumbed to the pressures of traditional gender roles where she struggled to navigate the monotonous and limiting nature of being a suburban housewife. And in her article Betty Friedan and the Origins of Feminism in Cold War America, Daniel Horowitz explains, “In 1963 Betty Friedan published The Feminine Mystique, a searing indictment of the triviality and frustrations of postwar domesticity... her misery in the suburbs may have prompted her to write The Feminine Mystique” (Horowitz 448). In her book, she harshly criticizes the false sense of fulfillment promised by the traditional role of the housewife. She takes a feminist stance in this piece, using her experience and her voice to connect with other suburban housewives and to motivate them to challenge The Feminine Mystique. However, conservative women opened up opportunities for women in different manners. In her article Politically Desperate Housewives, Michelle M. Nickerson hones in on the City of Los Angeles where anticommunist sentiments nurtured conservative ideas in Southern California. Nickerson sheds light on how, “Conservative women approached political work like other forms of civic work—as an extension of their household duties that fulfilled feminine responsibilities to the family and community” (Nickerson 464). In contrast to the way feminists advocated for greater opportunities for women, conservative women believed that political engagement was one of the many feminine responsibilities. They challenged the limited power that was traditionally given to housewives, propagating the idea that housewives were capable of having greater political influence. Thus, they supported the involvement of domestic women in modern politics and community engagement, pushing conservative ideas.",
        "Housewives used their identities as mothers and homemakers to gain credibility and push their political agendas. Women on both ends of the political spectrum used their experiences to strengthen their arguments. Betty Friedan was a mother and a wife herself, and she used her experiences as a housewife to connect with other suburban housewives who were feeling confined by the ideas of The Feminine Mystique. As Horowitz describes, Friedan’s “...life as a wife and mother sensitized her to the conflicts millions of others experienced but could not articulate” (Horowitz 456). Horowitz had a radical political past and was involved in left-winged politics. However, she largely concealed that aspect of her personal history to mend a stronger bond between herself and her larger suburban audience of housewives. This connection is what ultimately allowed Friedan to establish credibility and to voice the idea that housewives push past the societal expectation placed upon them. As opposed to feminist activists, conservative activists used other means of closely connecting to their audiences through shared experiences. As Nickerson points out,  “Housewives who lived in Pasadena drove cars over the hills to meetings in Encino and speaking engagements downtown... using their homes for political discussion and sociability” (Nickerson 461). These women not only used their personal trials to advocate for womens’ involvement in the political landscape, but they used their personal spaces to unite people together and to nurture these ideas. The ties that conservative women made between their personal and political lives gave them greater stability in their political advocacy and communal efforts for influence.",
        "Both feminist and conservative housewives showed how women could use their roles to influence social and political change, even with different goals. Friedan stands as an example of what is possible when women are able to redefine the traditional roles of a housewife. Horowitz explains how Friedan’s “...years at Smith boosted her confidence and enhanced her political education... her work as a labor journalist and activist provided her with... practical experiences crucial to her emergence as a leading feminist.” (Horowitz 456).  Friedan speaks on how her role as a journalist gave her a sense of confidence and fulfillment that she lacked in her role as a housewife. By doing so, she directly challenges the ideas of The Feminine Mystique, exploring the possibility that women can seek greater fulfillment beyond the societal constraints of domestic life and thereby evoking societal change. On the other hand, conservative women who entered the political sphere are using themselves as an example of what is to become of the role of conservative housewives. As explained by Nickerson, “The Tuesday Morning Study Club... started with a guest speaker and ended with discussion…” where women gathered in backyards and meeting halls to fight what they saw as threats to their families and communities (Nickerson 466). These women, apart from their daily responsibilities as conservative housewives, took on political roles to advocate for the feminine responsibility of political engagement. They use themselves as an example of the power that housewives can hold, challenging the traditional notions of the housewife. Thus, they are able to redefine their purpose and spread these conservative ideals.",
        "And so, both women that approached activism through a feminist and a conservative perspective sought out to define the roles of housewives as women more powerful than what society makes them out to be. They express their frustrations with traditional values and present opportunities for housewives to get greater opportunities. They root their arguments in personal experiences and connect with other women by doing so, presenting themselves as credible activists. They use their roles within society to influence change and to project their voice in a political sense. However, the role of women’s activism was far more complex than the two approaches discussed here. What other angles did female activists use to motivate their efforts? What techniques did they use and how were they successful or unsuccessful?"
    ]
    ,
    citations: ['Horowitz, Daniel. 2019. “Betty Friedan and the Origins of Feminism in Cold War America.” In Women\'s America: Refocusing the Past, edited by Linda K. Kerber, Jane S. De Hart, Cornelia H. Dayton, and Karissa Haugeberg, 688. 9th ed. N.p.: Oxford University Press.', 'Nickerson, Michelle M. 2019. “Politically Desperate Housewives.” In Women\'s America: Refocusing the Past, edited by Linda K. Kerber, Jane S. De Hart, Cornelia H. Dayton, and Karissa Haugeberg, 688. 9th ed. N.p.: Oxford University Press.']
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

export default BlogPost3;