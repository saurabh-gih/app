import './App.css'
import Navigation from './Components/Navigation'

function App() {

  return (
    <>
      <nav>
        <button>Sign Up</button>
      </nav>
      <main>
        <section className='image-container'>
          <img src="./assets/avatar.png" alt="avatar" />
        </section>
        <section className='form-container flow flow-space--large'>
          <article className='flow flow-space--large'>
            <h1 className='form-heading'>You and I</h1>
            <p>We can make it till end.</p>
          </article>
          <form class="signup-form grid-flow" action="" className="grid-flow">
            <label for="YourName">
              <input required type="text" id="firstName" placeholder="Your Name" />
            </label>
            <label for="email">
              <input required type="email" id="email" placeholder="Enter Email" />
            </label>
            <label for="password">
              <input required
                type="password"
                id="password"
                placeholder="Enter Password"
              />
            </label>
            <label for="confirmPassword">
              <input required
                type="password"
                id="password"
                placeholder="Confirm Password"
              />
            </label>
            <button class="button" type="submit" value="Submit">Submit</button>
          </form>
        </section>
      </main>
      <form>

      </form>
    </>
  )
}

export default App
