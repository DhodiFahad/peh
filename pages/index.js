import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/logo.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <nav>
        <div>
          <div>
            <Image src={logo} width="20" height="20"/>
          </div>
          <div>
            <span>
              P
            </span>
            <span>
              E
            </span>
            <span>
              H
            </span>
          </div>
        </div>

        <div>

          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/reviews">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/faqs">
                FAQS
              </Link>
            </li>
            <li>
              <Link href="/contact">
                CONTACT
              </Link>
            </li>
          </ul>

        </div>

      </nav>
      <div className={styles.hero}>
        <h1>Gain 2 - 7 Inches fast in Just 14 Days with our powerful Herbs</h1>
      </div>

      <div className={styles.article}>
        <p>
          Throw Away your Penis Pills, Penis Extenders, 
          Penis Pumps and definitely STOP those silly 
          Penis Enlargement Exercises that take Months 
          to get just 1 Inch added to your penis
        </p>
        <h3>Why?</h3>
        <p>
          Because you won't be Needing them Anymore! 
          and they Hurt your Penis, require more than 
          30 mins of your Time Everyday and Still take 
          longer to produce desired penis size...
        </p>

        <h3>Here's a Fast and Permanent solution 
          to help you increase your penis size!</h3>

        <p>Have you ever Wondered why Black Folks 
          from Sudan to Congo have extra-ordinarily 
          Huge Penis sizes? Did you also know that 
          most of them weren't born that way? NO.</p>

        <p>You see, in most cultures across Africa 
          when a male child reaches about 2 years old, 
          the parents make a concoction of herbs and 
          apply the mixture to the child's penis when 
          he's still young so that when this man grows 
          up he'll be able to please his many wives!</p>
        
        <p>
        The same is done to Adults whose penis growth was 
        stalled by various factors including "Genetics" - 
        A mixture of stronger more powerful herbs are 
        prepared with pure quality locally sourced Ghee 
        and given to the Adult to apply on their Penis 
        and massage while stretching/pulling forward twice 
        a day and after just a few days the Penis starts to 
        increase in girth and length steadily until the 
        right penis size is achieved!...
        </p>

        <h3>Now the Good News!!!</h3>

        <p>
          We have gotten this secret African penis enlargement 
          formula and upgraded it with more herbs mostly native 
          to East Africa and prepared it specifically for big 
          penis size hungry individuals who have looked everywhere 
          and wasted time trying to restore their Full Alpha Sexual 
          Prowess but ended up disappointed! This is for You 
          regardless of Your Genetics or Ethnicity,We have carefully 
          prepared, tested and packaged it as a Herbal Jelly that will 
          be your Ultimate - All in One Penis Enlargement Solution- 
          "you simply apply it on your penis and massage while 
          stretching/pulling forward for about 3 mins twice a day and 
          in a about 14 days you will have achieved impressively 
          noticeable growth in length and girth guaranteed" - this 
          upgraded formula works for everyone within 5 - 14 days, 
          meaning some people achieve the results faster than others 
          but a 14 day guarantee is given to everyone - even the 
          toughest ones will achieve results in that duration - 
          (WARNING: You are strongly warned to stop using the herbal 
          jelly once you get your desired size - over using the herbal 
          mixture and getting very huge is irreversible - We are not 
          liable for your Actions!!!)
        </p>

      </div>

      <div className={styles.products_section}>

      </div>
      
    </div>
  )
}
