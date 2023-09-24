import Nav from '../components/Nav';
import useImages from '../hooks/useImages';

import RegisterButton from '../components/RegisterButton';
import Timer from '../components/Timer';
const Landing = () => {
  const {
    logo,
    image1,
    vector,
    chain,
    vector2,
    creative,
    purpleLens1,
    purpleLens2,
    purpleLens3,
    purpleLens4,
    purpleLens5,
    star,
    starpu,
    stargra,
    arrow,
    unnamed,
    idea,
    group,
    judge,
    trophy,
    reward,
    partners,
    lock,
    listTerm,
    instgram,
    x,
    facebook,
    linkedin,
    phone,
    location,
  } = useImages();
  return (
    <>
      <Nav />
      <main className='font-mono'>
        <hr />
        <section className='relative'>
          <img
            className='opacity-40 absolute top-0 right-0 hidden lg:block'
            src={purpleLens1}
            alt=''
          />
          <img
            className='opacity-40 absolute top-0 lg:-top-[8rem] left-0 '
            src={purpleLens2}
            alt=''
          />
          <div className=''>
            <h1 className='relative mx-auto text-[1rem] md:text-[2rem] italic font-bold lg:text-right text-white py-8 lg:mr-12 w-fit'>
              Igniting a Revolution in HR Innovation
              <img
                src={vector}
                alt=''
                className='absolute right-0 w-28 lg:w-auto'
              />
            </h1>
          </div>
          <div className='flex flex-col lg:flex-row lg:pl-32 items-center'>
            <div className='relative lg:w-1/2 w-full lg:mt-0  text-center lg:text-left'>
              <div>
                <h1 className='relative text-[2rem] lg:text-[3.75vw] font-bold text-white w-fit lg:m-0 mx-auto pb-1'>
                  getlinked Tech
                  <img
                    className='h-7 w-5 lg:h-16 lg:w-12 absolute -top-3 right-3 lg:-top-10 lg:right-4'
                    src={creative}
                    alt='lightbulb'
                  />
                </h1>
                <h1 className='relative text-[2rem] lg:text-[3.75vw] font-bold text-white'>
                  Hackathon{' '}
                  <span className='text-color-3'>
                    1.0{' '}
                    <img
                      className='h-8 w-8 lg:h-20 lg:w-20 inline-block'
                      src={chain}
                      alt='chain'
                    />
                    <img
                      className='inline-block h-8 w-8 lg:h-20 lg:w-20'
                      src={vector2}
                      alt=''
                    />
                  </span>
                </h1>
              </div>
              <p className='text-xl leading-8 text-white font-mono w-full pt-4 px-3 pb-6 max-w-md mx-auto lg:m-0'>
                Participate in getlinked tech Hackathon <br />
                2023 stand a chance to win a Big prize
              </p>
              <RegisterButton text='Register' />
              <Timer />
              <img
                src={star}
                alt=''
                className='absolute w-[0.8rem] lg:w-auto -top-5 left-40 lg:-top-28 lg:left-0'
              />
              <img
                src={star}
                alt=''
                className='absolute w-[0.6rem] -top-4 right-10 lg:hidden'
              />
              <img
                src={star}
                alt=''
                className='absolute bottom-28 right-14 w-[0.6rem] lg:w-auto lg:right-32'
              />
            </div>
            <div className='relative lg:w-1/2 w-full'>
              <img
                className='object-cover mx-auto'
                src={image1}
                alt='a man wearing smart glasses'
              />
              <img
                src={star}
                alt=''
                className='hidden lg:block absolute top-0 left-0'
              />
            </div>
          </div>
        </section>
        <hr />
        <section className='pt-16 pb-20 px-4'>
          <div className='container mx-auto flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-24'>
            <div className='relative w-full lg:w-1/2'>
              <img
                className='mx-auto '
                src={idea}
                alt=''
              />
              <img
                src={stargra}
                alt=''
                className='absolute top-[36%] left-20 lg:left-0'
              />
              <img
                src={arrow}
                alt=''
                className='mx-auto lg:absolute lg:right-0 lg:-bottom-5 w-6 md:w-auto'
              />
            </div>
            <div className='text-center lg:text-left w-full lg:w-1/2'>
              <h2 className='relative text-[1.5rem] md:text-4xl text-white font-clash font-bold'>
                Introduction to getlinked <br />
                <span className='text-color-3'> tech Hackathon 1.0</span>
                <img
                  src={starpu}
                  alt=''
                  className='absolute top-8 right-2 w-[0.8rem] lg:w-auto'
                />
              </h2>
              <p className='font-mono w-full text-white text-sm leading-7 py-4 max-w-md mx-auto lg:m-0'>
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </div>
          </div>
        </section>
        <hr />
        <section className='relative py-16 px-4'>
          <img
            className='absolute w-[25.25rem] lg:w-[50rem] top-0 lg:-top-[4rem] left-0 opacity-40 z-[1] bg-blend-hard-light'
            src={purpleLens2}
            alt=''
          />
          <img
            className='absolute bottom-28 lg:-bottom-56 right-0 opacity-40 h-[30rem] lg:h-[90vh]'
            src={purpleLens3}
            alt=''
          />
          <div className='contain mx-auto flex flex-col-reverse lg:flex-row justify-center items-center'>
            <div className='relative w-full lg:w-1/2 text-center lg:text-left'>
              <h2 className='text-4xl text-white font-clash font-bold max-w-md mx-auto'>
                Rules and <br />{' '}
                <span className='text-color-3'>Guidelines</span>
              </h2>
              <p className='font-mono w-full text-white text-sm max-w-md mx-auto leading-7 py-4'>
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
              <img
                src={star}
                alt=''
                className='absolute top-20 lg:top-0 right-0 lg:left-[55%] z-0 w-[0.8rem] md:w-6'
              />
              <img
                src={star}
                alt=''
                className='w-[0.8rem] md:w-6 absolute bottom-0 lg:left-[80%] md:left-[30%] left-20 '
              />
            </div>
            <div className='relative w-full lg:w-1/2'>
              <img
                className='block mx-auto'
                src={unnamed}
                alt=''
              />
              <img
                src={star}
                alt=''
                className='absolute left-0 md:left-28 w-6 top-[45%] lg:hidden'
              />
            </div>
          </div>
        </section>
        <hr />
        <section className='relative py-16 px-4 mt-9'>
          <img
            src={purpleLens4}
            alt=''
            className='w-[50rem] lg:-bottom-32 left-0 absolute opacity-40'
          />
          <img
            src={purpleLens5}
            alt=''
            className='absolute -bottom-[5rem] md:-bottom-96 opacity-40 right-0'
          />
          <div className='container mx-auto flex flex-col lg:flex-row text-center lg:text-left justify-center items-center '>
            <div className='relative mt-10 w-full lg:w-1/2 mx-auto block'>
              <img
                className='mx-auto block'
                src={judge}
                alt=''
              />
              <img
                src={starpu}
                alt=''
                className='absolute -top-[5rem] left-[30%] w-[0.8rem] md:w-6'
              />
              <img
                src={star}
                alt=''
                className='absolute top-1/2 left-1/2 w-[0.8rem] md:w-6'
              />
              <img
                src={star}
                alt=''
                className='absolute -bottom-20 right-10 md:w-6 hidden lg:block'
              />
            </div>
            <div className='w-full lg:w-1/2'>
              <h2 className='text-4xl text-white font-clash font-bold'>
                Judging Criteria <br />{' '}
                <span className='text-color-3'>Key attributes</span>
              </h2>
              <p className='font-mono w-full text-white text-sm leading-7 mx-auto lg:m-0 max-w-lg py-4'>
                <span className='text-color-3'>Innovation and Creativity:</span>{' '}
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </p>
              <p className='font-mono w-full text-white text-sm leading-7 mx-auto lg:m-0 max-w-lg py-4'>
                <span className='text-color-3'>Functionality:</span> Assess how
                well the solution works. Does it perform its intended functions
                effectively and without major issues? Judges would consider the
                completeness and robustness of the solution.
              </p>
              <p className='font-mono w-full text-white text-sm leading-7 mx-auto lg:m-0 max-w-lg py-4'>
                <span className='text-color-3'>Impact and Relevance:</span>{' '}
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>
              <p className='font-mono w-full text-white text-sm leading-7 mx-auto lg:m-0 max-w-lg py-4'>
                <span className='text-color-3'>Technical Complexity:</span>{' '}
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced{' '}
                technologies or algorithms, and the scalability of the solution.
              </p>
              <p className='font-mono w-full text-white text-sm leading-7 mx-auto lg:m-0 max-w-lg py-4'>
                <span className='text-color-3'>
                  Adherence to Hackathon Rules:
                </span>{' '}
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </p>
              <div className='py-4'>
                <RegisterButton text={'Read More'} />
              </div>
            </div>
          </div>
        </section>
        <section
          id='faqs'
          className='py-16 px-4 mt-9 border-t'
        >
          <div className='container mx-auto flex-col lg:flex-row flex justify-center items-center gap-24'>
            <div className='relative text-white w-full max-w-[27rem]'>
              <img
                src={starpu}
                alt=''
                className='absolute md:-top-[3rem] md:-left-[3rem] -top-2 -left-21  w-[1.2rem] md:w-6'
              />
              <h2 className='text-center lg:text-left text-4xl text-white font-clash font-bold'>
                Frequently Ask <br />
                <span className='text-color-3'>Question </span>
              </h2>
              <p className='text-center lg:text-left font-mono w-full text-white text-sm leading-7 py-4'>
                We got answers to the questions that you might <br />
                want to ask about
                <span className='font-bold'> getlinked Hackathon 1.0</span>
              </p>
              <div className='flex flex-col gap-4'>
                <div class='relative w-full border-b border-white'>
                  <input
                    type='checkbox'
                    id='input1'
                    class='absolute peer opacity-0'
                  />
                  <label
                    for='input1'
                    class='flex justify-between items-center font-semibold tracking-[1px] text-sm  h-14 cursor-pointer'
                  >
                    Can I work on a project I started before the hackathon?{' '}
                    <span class='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                      <i className='fa-solid fa-plus'></i>
                    </span>
                  </label>
                  <div class='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                    <p class='py-4 text-base'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Officiis cum hic, architecto, deserunt, enim dolorum
                      eligendi assumenda eaque pariatur odit libero deleniti
                      impedit numquam voluptatum!
                    </p>
                  </div>
                </div>
                <div class='relative  w-full border-b border-white'>
                  <input
                    type='checkbox'
                    id='input2'
                    class='absolute peer opacity-0'
                  />
                  <label
                    for='input2'
                    class='font-semibold tracking-[1px] text-sm h-14 flex items-center justify-between cursor-pointer'
                  >
                    What happens if I need help during the hackathon?
                    <span class='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                      <i className='fa-solid fa-plus'></i>
                    </span>
                  </label>
                  <div class='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                    <p class='py-4 text-base'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Adipisci excepturi numquam quae odio optio blanditiis
                      cumque veniam at consequuntur perspiciatis explicabo
                      quisquam, voluptates nisi quod.
                    </p>
                  </div>
                </div>

                <div class='relative w-full  border-b border-white'>
                  <input
                    type='checkbox'
                    id='input3'
                    class='absolute peer opacity-0'
                  />
                  <label
                    for='input3'
                    class='font-semibold tracking-[1px] text-sm h-14 flex items-center justify-between cursor-pointer'
                  >
                    What happens if I don't have an idea for a project?
                    <span class='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                      <i className='fa-solid fa-plus'></i>
                    </span>
                  </label>
                  <div class='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                    <p class='py-4 text-base'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione ullam odit cupiditate explicabo quidem quia, velit
                      odio natus non animi consequuntur perspiciatis numquam
                      aspernatur debitis.
                    </p>
                  </div>
                </div>
                <div class='relative w-full  border-b border-white'>
                  <input
                    type='checkbox'
                    id='input3'
                    class='absolute peer opacity-0'
                  />
                  <label
                    for='input3'
                    class='font-semibold tracking-[1px] text-sm h-14 flex items-center justify-between cursor-pointer'
                  >
                    Can I join a team or do I have to come with one?
                    <span class='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                      <i className='fa-solid fa-plus'></i>
                    </span>
                  </label>
                  <div class='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                    <p class='py-4 text-base'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione ullam odit cupiditate explicabo quidem quia, velit
                      odio natus non animi consequuntur perspiciatis numquam
                      aspernatur debitis.
                    </p>
                  </div>
                </div>
                <div class='relative w-full  border-b border-white'>
                  <input
                    type='checkbox'
                    id='input3'
                    class='absolute peer opacity-0'
                  />
                  <label
                    for='input3'
                    class='font-semibold tracking-[1px] text-sm h-14 flex items-center justify-between cursor-pointer'
                  >
                    What happens after the hackathon ends
                    <span class='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                      <i className='fa-solid fa-plus'></i>
                    </span>
                  </label>
                  <div class='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                    <p class='py-4 text-base'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione ullam odit cupiditate explicabo quidem quia, velit
                      odio natus non animi consequuntur perspiciatis numquam
                      aspernatur debitis.
                    </p>
                  </div>
                </div>
                <div class='relative w-full  border-b border-white'>
                  <input
                    type='checkbox'
                    id='input3'
                    class='absolute peer opacity-0'
                  />
                  <label
                    for='input3'
                    class='font-semibold tracking-[1px] text-sm h-14 flex items-center justify-between cursor-pointer'
                  >
                    Can I work on a project I started before the hackathon?
                    <span class='rotate-0 peer-checked:rotate-180 duration-200 cursor-pointer'>
                      <i className='fa-solid fa-plus'></i>
                    </span>
                  </label>
                  <div class='max-h-0 opacity-0 overflow-hidden peer-checked:opacity-100 peer-checked:max-h-full transition-all duration-200'>
                    <p class='py-4 text-base'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione ullam odit cupiditate explicabo quidem quia, velit
                      odio natus non animi consequuntur perspiciatis numquam
                      aspernatur debitis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={group}
                alt=''
              />
            </div>
          </div>
        </section>
        <section
          id='timeline'
          className='py-16 px-4 mt-9 border-t'
        >
          <div className='container mx-auto flex-col flex justify-center items-center gap-4 lg:gap-1'>
            <div className='text-center'>
              <h1 className='text-2xl lg:text-[2rem] text-white font-clash font-bold mb-4'>
                Timeline
              </h1>
              <p className='text-white font-mono text-sm mb-[3rem]'>
                Here is the breakdown of the time we <br /> anticipate using for
                the upcoming event.
              </p>
            </div>
            <div className='flex flex-row-reverse lg:flex-row justify-center items-end w-full gap-5 lg:gap-[6rem]'>
              <div className='w-[23.5rem]'>
                <p className='py-1 lg:text-right lg:text-2xl text-color-3 font-bold'>
                  Hackathon Announcement
                </p>
                <p className='py-1 text-sm text-white lg:text-right'>
                  The getlinked tech hackathon 1.0 is formally announced <br />
                  to the general public and teams begin to get ready to register
                </p>
                <p className='text-color-3 font-bold lg:hidden pt-1'>
                  November 18, 2023
                </p>
              </div>
              <div className='flex flex-col items-center gap-3 max-w-fit'>
                <span className='border border-color-3 bg-color-3 w-1 h-[6rem] lg:h-[8.56rem]'></span>
                <span className='lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem] w-[1.2rem] h-[1.2rem] rounded-full bg-color-3 font-mono font-bold text-sm md:text-lg lg:text-2xl text-white flex items-center justify-center'>
                  1
                </span>
              </div>
              <div className='w-[23.5rem] hidden lg:block'>
                <p className='text-2xl text-color-3 font-bold'>
                  November 18, 2023
                </p>
              </div>
            </div>
            <div className='flex justify-center items-end w-full gap-5 lg:gap-[6rem]'>
              <div className='w-[23.5rem] hidden lg:block'>
                <p className='text-right text-2xl text-color-3 font-bold'>
                  November 18, 2023
                </p>
              </div>
              <div className='flex flex-col items-center gap-3 max-w-fit mt-3'>
                <span className='border border-color-3 bg-color-3 w-1 h-[6rem] lg:h-[8.56rem]'></span>
                <span className='lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem] w-[1.2rem] h-[1.2rem] rounded-full bg-color-3 font-mono font-bold text-sm md:text-lg lg:text-2xl text-white flex items-center justify-center'>
                  2
                </span>
              </div>
              <div className='w-[23.5rem]'>
                <p className='py-1 lg:text-2xl text-color-3 font-bold'>
                  Teams Registration begins
                </p>
                <p className='py-1 text-sm text-white'>
                  Interested teams can now show their interest in the <br />
                  getlinked tech hackathon 1.0 2023 by proceeding to register
                </p>
                <p className='pt-1 text-color-3 font-bold lg:hidden'>
                  November 18, 2023
                </p>
              </div>
            </div>
            <div className='flex flex-row-reverse lg:flex-row justify-center items-end w-full gap-5 lg:gap-[6rem]'>
              <div className='w-[23.5rem]'>
                <p className='py-1 lg:text-right lg:text-2xl text-color-3 font-bold'>
                  Teams Registration ends
                </p>
                <p className='py-1 text-sm text-white lg:text-right'>
                  Interested Participants are no longer Allowed to <br />
                  register
                </p>
                <p className='pt-1 text-color-3 font-bold lg:hidden'>
                  November 18, 2023
                </p>
              </div>
              <div className='flex flex-col items-center gap-3 max-w-fit'>
                <span className='border border-color-3 bg-color-3 w-1 h-[6rem] lg:h-[8.56rem]'></span>
                <span className='lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem] w-[1.2rem] h-[1.2rem] rounded-full bg-color-3 font-mono font-bold text-sm md:text-lg lg:text-2xl text-white flex items-center justify-center'>
                  3
                </span>
              </div>
              <div className='w-[23.5rem] hidden lg:block'>
                <p className='text-2xl text-color-3 font-bold'>
                  November 18, 2023
                </p>
              </div>
            </div>
            <div className='flex justify-center items-end w-full gap-5 lg:gap-[6rem]'>
              <div className='w-[23.5rem] hidden lg:block'>
                <p className='lg:text-right lg:text-2xl text-color-3 font-bold'>
                  November 18, 2023
                </p>
              </div>
              <div className='flex flex-col items-center gap-3 max-w-fit mt-3'>
                <span className='border border-color-3 bg-color-3 w-1 h-[6rem] lg:h-[8.56rem]'></span>
                <span className='lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem] w-[1.2rem] h-[1.2rem] rounded-full bg-color-3 font-mono font-bold text-sm md:text-lg lg:text-2xl text-white flex items-center justify-center'>
                  4
                </span>
              </div>
              <div className='w-[23.5rem]'>
                <p className='py-1 lg:text-2xl text-color-3 font-bold'>
                  Announcement of the accepted teams and ideas
                </p>
                <p className='py-1 text-sm text-white'>
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
                <p className='pt-1 text-color-3 font-bold lg:hidden'>
                  November 18, 2023
                </p>
              </div>
            </div>
            <div className='flex flex-row-reverse lg:flex-row justify-center items-end w-full gap-5 lg:gap-[6rem]'>
              <div className='w-[23.5rem]'>
                <p className='py-1 lg:text-right lg:text-2xl text-color-3 font-bold'>
                  Getlinked Hackathon 1.0 Offically Begins
                </p>
                <p className='py-1 text-sm text-white lg:text-right'>
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>
                <p className='pt-1 text-color-3 font-bold lg:hidden'>
                  November 18, 2023
                </p>
              </div>
              <div className='flex flex-col items-center gap-3 max-w-fit'>
                <span className='border border-color-3 bg-color-3 w-1 h-[6rem] lg:h-[8.56rem]'></span>
                <span className='lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem] w-[1.2rem] h-[1.2rem] rounded-full bg-color-3 font-mono font-bold text-sm md:text-lg lg:text-2xl text-white flex items-center justify-center'>
                  5
                </span>
              </div>
              <div className='w-[23.5rem] hidden lg:block'>
                <p className='text-2xl text-color-3 font-bold'>
                  November 18, 2023
                </p>
              </div>
            </div>
            <div className='flex justify-center items-end w-full gap-5 lg:gap-[6rem]'>
              <div className='w-[23.5rem] hidden lg:block'>
                <p className='text-right text-2xl text-color-3 font-bold'>
                  November 18, 2023
                </p>
              </div>
              <div className='flex flex-col items-center gap-3 max-w-fit mt-3'>
                <span className='border border-color-3 bg-color-3 w-1 h-[6rem] lg:h-[8.56rem]'></span>
                <span className='lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem] w-[1.2rem] h-[1.2rem] rounded-full bg-color-3 font-mono font-bold text-sm md:text-lg lg:text-2xl text-white flex items-center justify-center'>
                  6
                </span>
              </div>
              <div className='w-[23.5rem]'>
                <p className='py-1 lg:text-2xl text-color-3 font-bold'>
                  Demo Day
                </p>
                <p className='py-1 text-sm text-white'>
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </p>
                <p className='pt-1 text-color-3 font-bold lg:hidden'>
                  November 18, 2023
                </p>
              </div>
            </div>
            {/* <div className='flex flex-col items-center gap-3 max-w-fit mx-auto mt-3'>
            <span className='border border-color-3 bg-color-3 w-1 h-[6rem] lg:h-[8.56rem]'></span>
            <span className='lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem] w-[1.2rem] h-[1.2rem] rounded-full bg-color-3 font-mono font-bold text-sm md:text-lg lg:text-2xl text-white flex items-center justify-center'>
              2
            </span>
          </div>
          <div className='flex flex-col items-center gap-3 max-w-fit mx-auto mt-3'>
            <span className='border border-color-3 bg-color-3 w-1 h-[6rem] lg:h-[8.56rem]'></span>
            <span className='lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem] w-[1.2rem] h-[1.2rem] rounded-full bg-color-3 font-mono font-bold text-sm md:text-lg lg:text-2xl text-white flex items-center justify-center'>
              3
            </span>
          </div>
          <div className='flex flex-col items-center gap-3 max-w-fit mx-auto mt-3'>
            <span className='border border-color-3 bg-color-3 w-1 h-[6rem] lg:h-[8.56rem]'></span>
            <span className='lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem] w-[1.2rem] h-[1.2rem] rounded-full bg-color-3 font-mono font-bold text-sm md:text-lg lg:text-2xl text-white flex items-center justify-center'>
              4
            </span>
          </div>
          <div className='flex flex-col items-center gap-3 max-w-fit mx-auto mt-3'>
            <span className='border border-color-3 bg-color-3 w-1 h-[6rem] lg:h-[8.56rem]'></span>
            <span className='lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem] w-[1.2rem] h-[1.2rem] rounded-full bg-color-3 font-mono font-bold text-sm md:text-lg lg:text-2xl text-white flex items-center justify-center'>
              5
            </span>
          </div>
          <div className='flex flex-col items-center gap-3 max-w-fit mx-auto mt-3'>
            <span className='border border-color-3 bg-color-3 w-1 h-[6rem] lg:h-[8.56rem]'></span>
            <span className='lg:w-[3rem] lg:h-[3rem] md:w-[2rem] md:h-[2rem] w-[1.2rem] h-[1.2rem] rounded-full bg-color-3 font-mono font-bold text-sm md:text-lg lg:text-2xl text-white flex items-center justify-center'>
              6
            </span>
          </div> */}
          </div>
        </section>
        <section className='bg-[#100B20] relative pt-16 pb-24 px-4 mt-9'>
          <img
            className='absolute w-[50rem] top-0 lg:-top-[4rem] left-0 opacity-40 z-[1] bg-blend-hard-light'
            src={purpleLens2}
            alt=''
          />
          <img
            className='absolute -bottom-56 right-0 opacity-40 h-[90vh]'
            src={purpleLens3}
            alt=''
          />
          <div className='container mx-auto flex flex-col items-center justify-center gap-8 lg:gap-20'>
            <div className='relative w-full'>
              <div className='w-fit mx-auto lg:ml-auto lg:mr-40'>
                <h2 className='lg:text-left text-center text-[1.5rem] md:text-4xl text-white font-clash font-bold'>
                  Prizes and <br />
                  <span className='text-color-3'>Rewards</span>
                </h2>
                <p className='lg:text-left text-center font-mono w-full text-white text-sm leading-7 py-4'>
                  Highlight of the prizes or rewards for winners and <br /> for
                  participants.
                </p>
              </div>
              <img
                src={starpu}
                alt=''
                className='absolute -top-4 lg:top-0 left-4 lg:left-[15rem] w-[0.6rem] md:w-6'
              />
              <img
                src={starpu}
                alt=''
                className='absolute top-7 lg:top-20 right-20 lg:right-[10rem] w-[0.6rem] md:w-6'
              />
            </div>

            <div className='flex flex-col lg:flex-row items-center gap-12'>
              <div className='w-full lg:w-1/2'>
                <img
                  className='block mx-auto'
                  src={trophy}
                  alt=''
                />
              </div>
              <div className='relative w-full lg:w-1/2'>
                <img
                  src={reward}
                  alt=''
                />
                <img
                  src={star}
                  alt=''
                  className='absolute -top-14 lg:top-0 left-20 w-[0.8rem] md:w-6'
                />
                <img
                  src={star}
                  alt=''
                  className='absolute lg:top-20 lg:right-0 top-4 right-5 w-[0.8rem] md:w-6'
                />
                <img
                  src={star}
                  alt=''
                  className='absolute -bottom-10 lg:right-48 right-20 w-[0.8rem] md:w-6'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='relative pb-16 pt-12 lg:pt-40 px-4 mt-9'>
          <img
            src={purpleLens4}
            alt=''
            className='w-[50rem] -top-20 lg:top-0 left-0 absolute opacity-40'
          />
          <img
            src={purpleLens5}
            alt=''
            className='absolute w[20rem] w-[50rem] -bottom-[5rem] md:-bottom-96 opacity-40 right-0'
          />
          <div className='container mx-auto flex flex-col items-center gap-20'>
            <div className='text-center'>
              <h2 className='text-4xl text-white font-clash font-bold'>
                Partners and Sponsors
              </h2>
              <p className='font-mono w-full text-white text-sm text-center leading-7 py-4'>
                Getlinked Hackathon 1.0 is honored to have the following major{' '}
                companies as its partners and sponsors.
              </p>
            </div>
            <div className='relative border border-color-3 px-12 py-10 lg:px-40 lg:py-28 mb-32'>
              <img
                src={partners}
                alt=''
              />
              <img
                src={starpu}
                alt=''
                className='absolute top-0 lg:-top-10 left-6 w-[0.8rem] md:w-6'
              />
              <img
                src={starpu}
                alt=''
                className='absolute top-20 left-[55%] w-[0.8rem] hidden lg:block'
              />
              <img
                src={star}
                alt=''
                className='absolute bottom-10 left-[55%] w-[0.8rem] md:w-6'
              />
            </div>
          </div>
        </section>
        <hr className='mb-32' />
        <section className='relative pt-16 pb-20 lg:pb-40 px-12 mt-9'>
          <img
            src={purpleLens4}
            alt=''
            className='w-[50rem] bottom-[40%] lg:-bottom-20 left-0 absolute opacity-40'
          />
          <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12  lg:gap-20'>
            <div className='relative text-center lg:text-left'>
              <h2 className='text-4xl text-white font-clash font-bold'>
                Privacy Policy and <br />
                <span className='text-color-3'>Terms</span>
              </h2>
              <p className='font-mono w-full text-white text-sm leading-7 py-4'>
                Last updated on September 12, 2023
              </p>
              <p className='font-mono w-full text-white leading-7 pt-4 pb-8'>
                Below are our privacy & policy, which outline a lot of goodies.{' '}
                <br />
                it's our aim to always take of our participant
              </p>
              <div className='px-4 py-9 lg:px-16 lg:py-14 border max-w-xl border-color-3 text-left'>
                <p className='font-mono w-full text-sm text-white leading-7 py-4'>
                  At getlinked tech Hackathon 1.0, we value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your data when you participate in our tech hackathon
                  event. By participating in our event, you consent to the
                  practices described in this policy.
                </p>
                <p className='text-color-3 text[1rem] font-mono font-bold'>
                  Licensing Policy
                </p>
                <div className='flex gap-4'>
                  <img
                    className='block relative -top-6 left-0'
                    src={listTerm}
                    alt=''
                  />
                  <p className='font-mono w-full text-white text[0.875rem] leading-7 py-4'>
                    The Standard License grants you a non-exclusive right to{' '}
                    <br />
                    navigate and register for our event
                  </p>
                </div>
                <div className='flex gap-4'>
                  <img
                    className='block relative -top-6 left-0'
                    src={listTerm}
                    alt=''
                  />
                  <p className='font-mono w-full text-white text[0.875rem] leading-7 py-4'>
                    You are licensed to use the item available at any free
                    source <br /> sites, for your project developement
                  </p>
                </div>
                <div className='mt-4 text-center'>
                  <RegisterButton text={'Read More'} />
                </div>
              </div>
              <img
                src={starpu}
                alt=''
                className='absolute top-72 lg:top-32 right-0 w-[0.8rem] md:w-6'
              />
              <img
                src={starpu}
                alt=''
                className='absolute bottom-[30%]  -left-5 lg:-left-20 w-[0.8rem] md:w-6'
              />
              <img
                src={star}
                alt=''
                className='absolute -top-10 lg:top-0 right-0 lg:right-[30%] w-[0.8rem] md:w-6'
              />
            </div>
            <div className='relative top-2 mt-[4rem]'>
              <img
                className=''
                src={lock}
                alt=''
              />
              <img
                src={star}
                alt=''
                className='absolute w-4 lg:top-48 lg:right-20 top-20 right-10'
              />
              <img
                src={star}
                alt=''
                className='absolute w-3 md:w-6 lg:bottom-60 bottom-10 right-0'
              />
              <img
                src={starpu}
                alt=''
                className='absolute w-4 lg:bottom-80 lg:left-40 left-0 top-20'
              />
              <img
                src={star}
                alt=''
                className='absolute w-4 lg:bottom-60 lg:left-28 bottom-16 left-10'
              />
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-[#100B20] pt-20 lg:pt-20 px-20 lg:px-20'>
        <div className='container mx-auto flex flex-col lg:flex-row justify-between gap-y-20'>
          <div className='relative'>
            <img
              src={star}
              alt=''
              className='absolute top-6 -left-16 w-[0.8rem] md:w-4'
            />
            <img
              src={logo}
              alt=''
            />
            <p className='font-mono w-full text-white max-w-md text-sm leading-7 py-4'>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className='mt-[4rem]'>
              <a
                className='text-white border-r border-r-color-3 pr-4'
                href='#'
              >
                Terms of Use
              </a>
              <a
                className='text-white px-4'
                href='#'
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className='relative'>
            <img
              src={star}
              alt=''
              className='absolute w-[0.8rem] right-0 top-6'
            />
            <h3 className='font-semibold text[0.875rem] leading-6 text-color-3'>
              Useful Links
            </h3>
            <ul className='mt-4'>
              <li className='text-white text-[0.875rem] leading-6 font-mono py-2'>
                <a href='#'>Overview</a>
              </li>
              <li className='text-white text-[0.875rem] leading-6 font-mono py-2'>
                <a href='#'>Timeline</a>
              </li>
              <li className='text-white text-[0.875rem] leading-6 font-mono py-2'>
                <a href='#'>FAQs</a>
              </li>
              <li className='text-white text-[0.875rem] leading-6 font-mono py-2'>
                <a href='#'>Register</a>
              </li>
            </ul>
            <div className='flex items-center gap-4'>
              <h3 className='font-semibold text[0.875rem] leading-6 text-color-3'>
                Follow us
              </h3>
              <ul className='flex items-center gap-4'>
                <li>
                  <a href='#'>
                    <img
                      src={instgram}
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src={x}
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src={facebook}
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src={linkedin}
                      alt=''
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='relative flex flex-col gap-[1.3rem]'>
            <img
              src={star}
              alt=''
              className='absolute w-[0.8rem] right-0 bottom-1'
            />
            <h3 className='font-semibold text[0.875rem] leading-6 text-color-3'>
              Contact Us
            </h3>
            <div className='flex items-center gap-4'>
              <img
                src={phone}
                alt=''
              />
              <p className='text-white text-[0.875rem] leading-6 font-mono '>
                +234 679 81819
              </p>
            </div>
            <div className='flex items-center gap-4'>
              <img
                className='relative -top-5'
                src={location}
                alt=''
              />
              <p className='text-white text-[0.875rem] leading-6 font-mono '>
                27,Alara Street <br /> Yaba 100012 <br /> Lagos State
              </p>
            </div>
          </div>
        </div>
        <div className='text-center py-10'>
          <p className='relative max-w-fit mx-auto text-[0.875rem] text-white leading-6 font-mono'>
            <img
              src={starpu}
              alt=''
              className='absolute -top-4 lg:-top-10 right-1/2 w-[0.8rem]'
            />
            All rights reserved. © getlinked Ltd.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Landing;
