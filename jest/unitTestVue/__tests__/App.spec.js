import { shallowMount } from '@vue/test-utils';
import Component from '@/App.vue';
import Counter from '@/components/Counter.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Component);
})

afterEach(() => {
  wrapper.destroy();
})

describe('Testing App component', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  })
})

describe('Testing native dom events', () => {
  const wrapper = shallowMount(Counter);
  test('calls increment method when button is clicked', () => {
    const increment = jest.fn();
    wrapper.setMethods({ increment });
    wrapper.find('button').trigger('click');
    expect(increment).toBeCalled();
  })
})
