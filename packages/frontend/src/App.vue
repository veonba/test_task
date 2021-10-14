<template>
    <form
        @submit.prevent="createDonation"
        class="widget"
    >
        <form-suggestions/>
        <form-input/>
        <button type="submit">
            Donate
        </button>
    </form>
</template>

<script>
    import {mapActions} from 'vuex';
    import FormSuggestions from '@/components/FormSuggestions';
    import FormInput from '@/components/FormInput';

    export default {
        name: 'Widget',
        components: {
            FormSuggestions,
            FormInput,
        },
        methods: mapActions('donation', {
            createDonation: 'createDonation',
        }),
    };
</script>

<style lang="scss">
    .widget {
        display: flex;
        flex-direction: column;
        max-width: 312px;
    }
</style>
