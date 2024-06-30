import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { Card, Header } from '@luminescent/ui';
import { ImageToggle } from '~/components/ImageToggle';
export default component$(() => {
  return (
    <>
      <section class="max-w-6xl mx-auto py-32 px-4 flex flex-col gap-4">
        <div class="text-4xl font-extrabold tracking-wide mb-2 flex items-center gap-4">
          Guides
        </div>
        <Card>
          <Header id="Setup">
            Initial Setup
          </Header>
          <ul class="list-decimal">
            <li>Click the stream tools dropdown and select settings.</li>
            <li>Click the "Login to twitch" button in the top left</li>
            <li>While still in the settings page enable/disable and change any of the chat messages</li>
            <li>Click save to make sure your settings are saved.</li>
            <img src="https://i.imgur.com/8aZ4jJS.png" alt="settings" width={512} height={512} />
          </ul>
        </Card>
        <Card>
          <Header id="Cheers">
            Cheers
          </Header>
          <ul class="list-decimal">
            <li>By default, there will always be a section labeled "Default".
              <ImageToggle imgSrc='https://i.imgur.com/9k2ni60.png' buttonId='cheers' />
            </li>
            <li>This "Default" section is used if a cheer doesn't include a message or if the message doesn't match any other section's keyword.</li>
            <li>Click the "Add Section" button to create a new section.
              <ImageToggle imgSrc='https://i.imgur.com/wX29jUV.png' buttonId='cheers-section' />
            </li>
            <li>Enter a keyword (e.g., "zap") for the new section.
              <ImageToggle imgSrc='https://i.imgur.com/MrAmkuF.png' buttonId='cheers-section-keyword' />
            </li>
            <li>Add all the shockers you want this keyword to activate.
              <ImageToggle imgSrc='https://i.imgur.com/DRh7AdS.png' buttonId='cheers-shocker' />
            </li>
            <li>Select the action (Type Selector dropdown) that you want this keyword to trigger.
              <ImageToggle imgSrc='https://i.imgur.com/uWatN0M.png' buttonId='cheers-type' />
            </li>
            <li>Click the "Add Bracket" button to create a new bit bracket.
              <ImageToggle imgSrc='https://i.imgur.com/5mFRC3P.png' buttonId='cheers-bracket' />
            </li>
            <li>Set the bit amount for the bracket.
              <ImageToggle imgSrc='https://i.imgur.com/0lsmNQl.png' buttonId='cheers-bracket-bit' />
            </li>
            <li>
              If you have 2 brackets, one with a bit amount of 100 and another with a bit amount of 200, donations between 100-199 bits will round down to 100.
            </li>
            <li>Set the intensity and duration of the shock for the bracket.
              <ImageToggle imgSrc='https://i.imgur.com/aRrJYyC.png' buttonId='cheers-bracket-intensity-duration' />
            </li>
            <li>If you want a warning vibration before the shock, enable the "Warn" toggle.</li>
            <li>
              Select the mode for this bracket:
              <h1>"All" will activate all shockers in the section.</h1>
              <h1>"Random" will activate a random shocker.</h1>
              <h1>"Round-Robin" will activate the next shocker in line for each activation.</h1>
            </li>
          </ul>
        </Card>
        <Card>
          <Header id="Redeems">
            Redeems
          </Header>
          <ul class="list-decimal">
            <h1>Redeems will be automatically loaded if you are logged in and have them on your account</h1>
            <li>Enable whichever redeems you want</li>
            <li>Select the shockers</li>
            <li>select the action type (Type Selector dropdown)</li>
            <li>Select the intensity and duration of the action</li>
            <li>If you want a warning vibration before the shock, enable the "Warn" toggle.</li>
            <li>
              Select the mode for this redeems:
              <h1>"All" will activate all shockers in the section.</h1>
              <h1>"Random" will activate a random shocker.</h1>
              <h1>"Round-Robin" will activate the next shocker in line for each activation.</h1>
            </li>
            <img src="https://i.imgur.com/JQH1QMg.png" alt="settings" width={512} height={512} />
          </ul>
        </Card>
        <Card>
          <Header id="Subs">
            Subs
          </Header>
          <ul class="list-decimal">
            <li>Click the stream tools dropdown and select "Subs & Gifted Subs".</li>
            <li>Enable each tier of subs you want.</li>
            <li>Select the shockers for each tier.</li>
            <li>Select the type you want to use (incremental or brackets).</li>
            <li>
              Incremental:
              <ul>
                <li>Set the base and maximum intensity.</li>
                <li>Specify how much intensity increases per gifted sub of that tier.</li>
                <li>Set the base and maximum duration.</li>
                <li>Specify how much duration increases per gifted sub of that tier.</li>
                <li>If you want a warning vibration before the shock, enable the "Warn" toggle.</li>
                <li>
                  Select the mode for the tier:
                  <ol class="pl-5">
                    <li>"All" will activate all shockers in the section.</li>
                    <li>"Random" will activate a random shocker.</li>
                    <li>"Round-Robin" will activate the next shocker in line for each activation.</li>
                  </ol>
                </li>
                <li>Select the action type (Type Selector dropdown).</li>
              </ul>
            </li>
            <li>
              Brackets: Refer to the "Cheers" section. Brackets here work similarly.
            </li>
            <li>
              At the top of the page, you can select if subs should be handled as cheers. If selected, a tier 1 sub is 250 bits, tier 2 is 500, and tier 3 is 1250.
            </li>
          </ul>
        </Card>
        <Card>
          <Header id="HypeTrain" title="Hype Train">
            Hype Train
          </Header>
          <ul class="list-decimal">
            <li>Click the stream tools dropdown and select "Hype Train".</li>
            <li>On New Level:
              <ul>
                <li>Enable this option to trigger a shock with each new level of the hype train.</li>
                <li>Select the shockers you want to activate for each level.</li>
                <li>Select the activation type (incremental or normal).</li>
                <li>
                  Incremental: Intensity and duration increase with each level similar to incremental subs.
                  <ul class="pl-5">
                    <li>Set the base and maximum intensity.</li>
                    <li>Specify the intensity increment per level of the hype train.</li>
                    <li>Set the base and maximum duration.</li>
                    <li>Specify the duration increment per level of the hype train.</li>
                    <li>If you want a warning vibration before the shock, enable the "Warn" toggle.</li>
                    <li>
                      Select the activation mode:
                      <ol class="pl-5">
                        <li>"All" activates all shockers in this section.</li>
                        <li>"Random" activates a random shocker.</li>
                        <li>"Round-Robin" activates shockers sequentially for each activation.</li>
                      </ol>
                    </li>
                    <li>Select the action type (Type Selector dropdown).</li>
                  </ul>
                </li>
                <li>
                  Normal: Activates at a set intensity and duration for each level.
                  <ul class="pl-5">
                    <li>Set the intensity and duration.</li>
                    <li>If you want a warning vibration before the shock, enable the "Warn" toggle.</li>
                    <li>
                      Select the activation mode:
                      <ol>
                        <li>"All" activates all shockers in this section.</li>
                        <li>"Random" activates a random shocker.</li>
                        <li>"Round-Robin" activates shockers sequentially for each activation.</li>
                      </ol>
                    </li>
                    <li>Select the action type (Type Selector dropdown).</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>On Train End:
              <ul>
                <li>Enable this option to trigger a shock when the hype train ends.</li>
                <li>Select the shockers you want to activate.</li>
                <li>Set the base and maximum intensity.</li>
                <li>Set the duration per level.</li>
                <li>Specify the intensity increment per level.</li>
                <li>If you want a warning vibration before the shock, enable the "Warn" toggle.</li>
                <li>
                  Select the activation mode:
                  <ol class="pl-5">
                    <li>"All" activates all shockers in this section.</li>
                    <li>"Random" activates a random shocker.</li>
                    <li>"Round-Robin" activates shockers sequentially for each activation.</li>
                  </ol>
                </li>
                <li>Select the action type (Type Selector dropdown).</li>
              </ul>
            </li>
          </ul>
        </Card>
        <Card>
          <Header id="Follows">
            Follows
          </Header>
          <ul class="list-decimal">
            <li>Select the shockers you want this to trigger.</li>
            <li>Select the intensity and duration</li>
            <li>If you want a warning vibration before the shock, enable the "Warn" toggle.</li>
            <li>
              Select the mode for the tier:
              <ol class="pl-5">
                <li>"All" will activate all shockers in the section.</li>
                <li>"Random" will activate a random shocker.</li>
                <li>"Round-Robin" will activate the next shocker in line for each activation.</li>
              </ol>
            </li>
            <li>Select the action type (Type Selector dropdown).</li>
          </ul>
          <img src="https://i.imgur.com/RKEZApF.png" alt="settings" width={512} height={512} />
        </Card>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Guides',
  meta: [
    {
      name: 'description',
      content: 'Multishock setup guides',
    },
    {
      name: 'og:description',
      content: 'Multishock setup guides',
    },
  ],
};
