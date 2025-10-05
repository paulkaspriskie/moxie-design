import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Welcome',
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: `
          # Moxie Design

          ## Getting Started

          \`\`\`bash
          npm install @moxie-design/styles
          \`\`\`

          Import your CSS:

          \`\`\`css
          @import '@moxie-design/styles';
          \`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {
  render: () => `
    <main style="padding:2rem; font-family: sans-serif;">
      <h1>Moxie Design</h1>
      <p>See the Docs tab for setup instructions.</p>
    </main>
  `,
};
