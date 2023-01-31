import React from 'react'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'
import blog1 from '../../assets/images/blog-02-job.jpg'
import {Link} from 'react-router-dom'
export const BlogDetails2 = () => {
  return (
    <>
      <section className='blog-details mt-5'>
        <Container>
            <Row>
                <Col md={9}>
                    <img src={blog1} className='img-fluid' alt="" />
                    <h4>The Job</h4>
                    <p>Mohammed Masud Rayhan</p>

                    <p>And how do you explain when things don’t go as you assume? I mean how any organization really get something exceptional? For example, why is apple so innovative? Year after year along with all completion, how apple is continuing their innovation and creativity? And yet we must not forget that they started as a computer company! Just like other computer manufacturer organization they got everything like distribution channel, customer service, after sales issues but what really makes them different in continuation of the word innovative and changing the world? Alike this example, the BPO industry in Bangladesh is one of the emerging sectors which have started contributing in financial and technology sector. If we access a bit deep, we find it’s not the system which is making the change rather it’s the people who are leading the system are making the changes. All innovation and creativity starts with human inside. And yes, it’s a potential selection that you choose to be a part of this untapped sector to contribute. So to be a part of this market what are the attributes you required? Some people mention just a “Call Center Job”, but it must be named as “Communication Chamber”. One chair with technical system and you are supporting hundreds of your customer and that’s how a contact center begins. Let’s point some basic requirement and attributes you are really need to be a part of this job:</p>
                    <p>• Communication Skill: Developing the communication skills can help all aspects of a person’s career, from professional life to social and everything in between. The ability to communicate information accurately, clearly and as intended, is an imperative life skill and to be a part of the contact center it’s highly required. You need stronger decision making ability, streamlined work approach, enhanced professional workflow and sound business relationship then effective communication is all you need. Research has shown that effective lateral and work group communication leads to an improvement in overall company performance. It has also been discovered that employees who were graded as highest in production had received the most effective communication from their workmates. So if you want to be a part of the future innovation let’s start developing communication skill daily.</p>
                    <p> Quick learning ability: The aptitude, the hunger for learning always leads a person to learn quickly. Learning is one of the fundamental key to achieving a person's full potential. With positive attitude, seeking expert’s advice, asking fact finding questions and open mildness helps people to learn quickly.</p>
                    <p>Ability to lead from own position: You really don’t need a position (formal title) to lead - yourself, your work, your approach and your vision. “The farmer has patience and trusts the process. He just has the faith and deep understanding that through his daily efforts, the harvest will come. And then one day, almost out of nowhere, it does.” ― Robin S. Sharma, the Leader Who Had No Title: A Modern Fable on Real Success in Business and in Life. A simple learning: Have the courage to take Lead and take ownership</p>
                    <p>The mindset: This mindset is all about to serve. To serve the humanity and the industry. This mindset also contains dedication, unbound enthusiasm, extreme energy which will inspire others. Your thoughts and how do you explain when things don’t go as you assume? I mean how any organization really get something exceptional? For example, why is apple so innovative? Year after year along with all completion, how apple is continuing their innovation and creativity? And yet we must not forget that they started as a computer company! Just like other computer manufacturer organization they got everything like distribution channel, customer service, after sales issues but what really makes them different in continuation of the word innovative and changing the world? Alike this example, the BPO industry in Bangladesh is one of the emerging sectors which have started contributing in financial and technology sector. If we access a bit deep, we find it’s not the system which is making the change rather it’s the people who are leading the system are making the changes. All innovation and creativity starts with human inside. And yes, it’s a potential selection that you choose to be a part of this untapped sector to contribute. So to be a part of this market what are the attributes you required? Some people mention just a “Call Center Job”, but it must be named as “Communication Chamber”. One chair with technical system and you are supporting hundreds of your customer and that’s how a contact center begins. Let’s point some basic requirement and attributes you are really need to be a part of this job:</p>
                    <p>Communication Skill: Developing the communication skills can help all aspects of a person’s career, from professional life to social and everything in between. The ability to communicate information accurately, clearly and as intended, is an imperative life skill and to be a part of the contact center it’s highly required. You need stronger decision making ability, streamlined work approach, enhanced professional workflow and sound business relationship then effective communication is all you need. Research has shown that effective lateral and work group communication leads to an improvement in overall company performance. It has also been discovered that employees who were graded as highest in production had received the most effective communication from their workmates. So if you want to be a part of the future innovation let’s start developing communication skill daily.</p>
                    <p>Quick learning ability: The aptitude, the hunger for learning always leads a person to learn quickly. Learning is one of the fundamental key to achieving a person's full potential. With positive attitude, seeking expert’s advice, asking fact finding questions and open mildness helps people to learn quickly.</p>
                    <p>Ability to lead from own position: You really don’t need a position (formal title) to lead - yourself, your work, your approach and your vision. “The farmer has patience and trusts the process. He just has the faith and deep understanding that through his daily efforts, the harvest will come. And then one day, almost out of nowhere, it does.” ― Robin S. Sharma, The Leader Who Had No Title: A Modern Fable on Real Success in Business and in Life. A simple learning: Have the courage to take Lead and take ownership.</p>
                    <p>The mindset: This mindset is all about to serve. To serve the humanity and the industry. This mindset also contains dedication, unbound enthusiasm, extreme energy which will inspire others. Your thoughts are eventually insignificant unless you activate them with dedication and you became consistently constant! Remember, a strong mindset and a set of action demonstrate unleashing the potential of a professional.</p>
                    <p>Technical skill: Mostly computer related skill like MS office tool. Multitasking ability while using the technical system is one of the core requirement you need have to be extraordinary part of this industry.</p>
                    <p>In Bangladesh we have a large number of incumbent who are looking for a job and if you are one of them then you're competing against top talent across the city these days. To be a winner and a part of this attractive environment let’s develop and create the mastery of self every day.</p>
                    <h5>Mohammed Masud Rayhan</h5>
                    <p>Corporate Trainer & Performance Enhancement Catalyst</p>


                    
                    <h5>Comments</h5>
                    <p>No comments available.</p>
                    <h5>ADD REPLY</h5>

                    <p>Max Length: 2048 Characters.</p>
                    <Form>
                        <Form.Group className="mb-3">
                        </Form.Group>
                        <Row className="mb-3">
                        <Form.Group className="mb-3">
                    
                    <Form.Control as="textarea" placeholder='Enter your message' rows={3} className=' rounded-0'  />
                </Form.Group>
         
                            <Col>
                            <Form.Control placeholder="Name" className=' rounded-0'/>
                            </Col>
                            <Col>
                            <Form.Control placeholder="Email" className=' rounded-0' />
                            </Col>
                        </Row>
                 
                        
                 
                        <Button className='rounded-0' variant="warning" type="submit">
                            Submit
                        </Button>
                        </Form>
                </Col>
                <Col md={3}>
                    <h4>RECENT POSTS</h4>

                    <div>
                        <Link to='/BlogDetails'>
                        Business in the time of CORONA: Battling the odds in Call Center Operations
                        </Link>
                        <p>08/Oct/2020</p>
                    </div>

                    <div>
                        <Link to='/BlogDetails2'>
                        The Job
                        </Link>
                        <p>15/Jan/2018</p>
                    </div>

                    <div>
                        <Link to='/BlogDetails3'>
                        Business Process Outsourcing: A General Understanding
                        </Link>
                        <p>15/Jan/2018</p>
                    </div>
                </Col>
            </Row>
        </Container>  
      </section>  
    </>
  )
}
