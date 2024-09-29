import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import Navbar from '../../Components/Navbar';
import './Post1.css';

const BlogPost = () => {
  const post = {
    title: "Her Ties to Motherhood",
    description: "The lives of enslaved women rewritten in the frame of motherhood.",
    date: "September 28, 2024",
    author: "Pranavi Kolouju",
    content: [ "Our history books fall victim to the one-noted narrative of slavery, where the enslaved peoples’ history is engulfed in their trials and deafened by the voices of those that held power over them. Slavery is often depicted as an encompassing identity, where the intricacies of women’s lives were masked. Other values, such as motherhood, governed their lives as much as their state of oppression. However, these truths were not documented in primary texts causing them to be shadowed by the half-truths that were. So, where do we find her lost stories? We find them where we search for them. Historians have made great strides in piecing together these missing narratives through unconventional methods. From their discoveries, we learn that enslaved women carried with them an imbalance of identities, where other aspects of their persona veiled their enslavement at times. One of these many identities was motherhood. Painting enslaved women as mothers adds profound depth to the portrait of slavery. What did motherhood mean for these women? Motherhood employed duties such as a desire to protect and a desire to transmit cultural values, which was critical in sustaining life and resisting the erasure of livelihood intended by slavery.",
      "We will be exploring the text All That She Carried: The Journey of Ashley Sack, a Black Family Keepsake by Tiya Miles to dissect how enslaved women honored their identities as mothers. In this piece, Mills explores the relationship between Rose, an enslaved woman, and her daughter Ashley who was sent to another plantation at the age of nine. While Rose and Ashley never met each other after her departure, Rose sent with Ashley a sack that contained a few ordinary yet noteworthy items: a tattered dress, three handfuls of pecans, and a braid of her hair. The contents of this sack weave together a history that was unarchived, one that is worth exploring to understand the weight that motherhood placed on these women.",
      "The first item found in the sack was a tattered dress. The tattered dress meant a million things. Placed in a historical context, it was a sign of protection against the sexual misdemeanors that young girls fell victim to under enslavement. Louisa Picquet, a young and enslaved girl, “recalled that her assigned dress in slavery was ‘very thin’ and ‘low-neck’d’” and her master “...had gained easy access to her thirteenth-year-old body through the skimpy material of her slave uniform” (Miles 145). Rose’s foresight to include a dress is indicative of a motherly desire to protect her child from the brutalities of slavery. In a world where enslaved women were hypersexualized, enslaved mothers were responsible for not only protecting themselves but also their daughters. This motherly responsibility is signified by Rose’s decision to send Ashley off with an item of clothing. However, protection was not the only motivation behind the dress. The threads themselves carried great historical significance for enslaved women. In her text, Miles illustrates how “Black women transformed their bolts of hard-worn cloth into master-pieces of cut and color that earned them back an ability to signify their sense of self worth and community value through dress” (Miles 151). Though they were subjected to the looms to make clothing for entire plantations, women used the skills forced upon them as a means of resistance against the insults to their dignity. They crafted their own clothes for themselves and their families to uphold their selfhood. And, Rose wanted the same for her daughter.",
      "A braid of Rose’s hair was the next item enclosed in her daughter's sack. While a rather unusual item to include in a survival kit, the hair carries broader meaning. As Miles conveys, “In the central and West African regions from which enslaved Blacks were taken, community members prized intricate hairstyles formed of braids and twined tresses, which rose to the height of an art form” (Miles 111). This hair was a culminating symbol of their home, their journey, and their current struggles. However, the hair was also a means of expression that helped enslaved women stay connected to their roots. This is a piece of cultural identity that Rose wished to send away with her daughter. However, the braid can also be seen as a symbol of motherly love. As Miles interprets, “A reading of the sack as a protective spirit bag would suggest that a braid of Rose’s hair was meant to enliven it with Rose’s spirit” (Miles 110). In the nature of a protective spirit bag, Rose saw the braid as a means of emotional protection, a piece of her that her daughter could carry with her in this unfamiliar territory. This is depictive of a motherly act to protect her daughter in places where she cannot be with her, which happened quite frequently as families were torn apart in slave sales.",
      "That last item included in Ashley’s sack were three handfuls of s. While there were pecanmany foods that Rose could have sent with her daughter, the selection of pecans as a food source is rather interesting. As Miles contexualizes, “It was a delicacy deemed an ‘exotic import’ in antebellum South Carolina, second in exoticism only to almonds…access to pecans would have been limited in the Southeast” (Miles 195). Rose’s determination to acquire this preservable and nutritious food source amidst its difficulty speaks to her resolve of supplying her daughter with deluxe forms of sustenance. This can be a source of comfort, especially to a child who has been separated from her family and is facing the adversities of slavery. While the pecan’s would have been a fine source of short-term sustenance, they also carry cultural value. Miles explains how “Migrant children dislocated by sale slowly entered new circles of kin where a Black food culture reminiscent of Africa, influenced by Europe and reflective of Native America, succored cotton plantation communities” (Miles 216). Rose saw the pecans as a channel of cultural preservation. They were not only a source of temporary fuel but a means of culinary preparation that sustains the long-standing traditions of enslaved women.",
      "Through a tour of Ashley’s sack, we convey how the tale of slavery can be rewritten as a tale of motherhood, where enslaved mothers strive to provide protection to their children and use them as a vessel to pass forward their culture that is being threatened by the bondage of slavery. As we wrap up this discussion, I encourage you to think about the many alternative directions in which history can be rewritten, centering women and the lives they lived beyond the title of a slave. What roles did they play? What titles did they hold? How did these titles influence their actions and emotions? What contributions did they make to history that are unaccounted for in the archives of that time?"
    ],
    citations: "Miles, Tiya. 2022. All That She Carried: The Journey of Ashley's Sack, a Black Family Keepsake. N.p.: Random House Publishing Group."
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

          {/* Citations */}
          <Typography variant="body1" className="post-citations">
            Citations: {post.citations}
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default BlogPost;
