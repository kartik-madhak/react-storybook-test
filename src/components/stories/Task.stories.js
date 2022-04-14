import Task from "../Task";

export default {
    component: Task,
    title: 'Task',
}

const Template = args => <Task {...args}/>

export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'My Title',
        state: 'INBOX',
        updatedAt: Date.now()
    },
}

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'PINNED'
    }
}

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'ARCHIVED'
    }
}