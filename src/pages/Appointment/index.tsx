import React, {useState} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../components/Button';
import HourToggle from '../../components/HourToggle';

import { 
    Container, 
    LabelWrapper,
    BackButton,
    Label,
    BottomModal,
    SecondaryLabel,
    DaysWrepper,
    DayLabel,
    HighlightedDay,
    HighlightedDayNumber,
    HighlightedDayDayWeek,
    InfoCard,
    InfoCardContent,
    HoursQuestion,
    HoursQuestionLabel,
    GridLabels,
    GridLabelsSytle,
    HourGrid,
    ConfirmAppointment,
    ConfirmAppointmentLabels,
    AppointmentDetails,
    AppointmentDetailLabels,
    ConfirmActionsWrapper,
    ConfirmAppointmentButton,
    ConfirmAppointmentButtonLabels
} from './styles';

const Appointment: React.FC = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const Bold = (props: any) => <Text style={InfoCardContent.bold}>
      {props.children}
  </Text>

  return (
    <>
    <>
    <BackButton onPress={() => {
      navigation.goBack();
    }}>
          <AntDesign name="left" size={20}/> 
      </BackButton>
      <LabelWrapper>
          <Text style={Label.text}>
              Agendar Serviço
          </Text>
      </LabelWrapper>
      <Text style={SecondaryLabel.text}>
          Nome do serviço grande e longo
      </Text>
    </>
    <Container>
     <DaysWrepper>
         <Text style={DayLabel.text}>22</Text>
         <Text style={DayLabel.text}>23</Text>
         <Text style={DayLabel.text}>24</Text>
         <HighlightedDay>
             <Text style={HighlightedDayNumber.text}>25</Text>
             <Text style={HighlightedDayDayWeek.text}>Terça</Text>
         </HighlightedDay>
         <Text style={DayLabel.text}>26</Text>
         <Text style={DayLabel.text}>27</Text>
         <Text style={DayLabel.text}>28</Text>

     </DaysWrepper>
     <InfoCard>
        <Text style={InfoCardContent.text}>
        Este serviço dura em média  
        <Bold> XX horas </Bold>          
        e a atendente irá escolher 
        algum dos horários que você
        selecionar
        </Text>
     </InfoCard>
     <HoursQuestion>
         <Text style={HoursQuestionLabel.text}>
        Quais horário você está disponível para
        receber a profissional?
         </Text>
     </HoursQuestion>

    <GridLabels>
        <Text style={GridLabelsSytle.text}>Manhã</Text>
        <Text style={GridLabelsSytle.text}>Tarde</Text>
        <Text style={GridLabelsSytle.text}>Noite</Text>
    </GridLabels>
    <HourGrid>
        <HourToggle
            disabled={false}
            selected={true}
            hour='08:00'
        />
        <HourToggle
            disabled={true}
            selected={false}
            hour='08:00'

        />
        <HourToggle
            disabled={false}
            selected={false}
            hour='08:00'
        />
        <HourToggle
            disabled={false}
            selected={false}
            hour='08:00'
        />
        <HourToggle
            disabled={false}
            selected={false}
            hour='08:00'
        />
        <HourToggle
            disabled={false}
            selected={false}
            hour='08:00'
        />
                <HourToggle
            disabled={false}
            selected={false}
            hour='08:00'
        />
        <HourToggle
            disabled={false}
            selected={false}
            hour='08:00'

        />
        <HourToggle
            disabled={false}
            selected={false}
            hour='08:00'
        />
        <HourToggle
            disabled={false}
            selected={false}
            hour='08:00'
        />
        <HourToggle
            disabled={false}
            selected={false}
            hour='08:00'
        />
        <HourToggle
            disabled={false}
            selected={false}
            hour='08:00'
        />
                <HourToggle
            disabled={false}
            selected={false}
            hour='08:00'
        />
        <HourToggle
            disabled={false}
            selected={false}
            hour='08:00'

        />
        <HourToggle
            disabled={false}
            selected={false}
            hour='08:00'
        />
    </HourGrid>

    </Container>

        {
            !hidden && 
            <BottomModal>
            <Button label='Agendar'
                    onPress={() => {
                    setHidden(true)
                    setVisible(true);
                    }}
                />
            </BottomModal>
        }

        {
            visible && 
            <ConfirmAppointment>
            <Text style={ConfirmAppointmentLabels.title}>
                Confirmar Horário</Text>
            <Text style={ConfirmAppointmentLabels.message}>
             Confirma que a profissional poderá
             te atender no dia 
             <Bold> 25/04/2022 </Bold>
             às
             <Bold> 12:00h </Bold>
            </Text>
            <AppointmentDetails>
                <Text style={AppointmentDetailLabels.info}>
                    Agendamento Flexível
                </Text>
                <Text style={AppointmentDetailLabels.price}>
                    R$ 29,90
                </Text>
            </AppointmentDetails>
            <ConfirmActionsWrapper>
                <TouchableOpacity onPress={() => {
                    console.log('foi');
                    setVisible(false);
                    setHidden(false);
                    }}
                    >
                <Text style={ConfirmAppointmentButtonLabels.decline}>
                    Não, desejo voltar
                </Text>
                </TouchableOpacity>
                <ConfirmAppointmentButton onPress={() => {
                    navigation.navigate('Payments');
                }}
                >
                    <Text style={ConfirmAppointmentButtonLabels.agree}>
                        Sim, Continuar
                    </Text>
                </ConfirmAppointmentButton>
            </ConfirmActionsWrapper>
            </ConfirmAppointment>
        }
    </>
    
  );
}

export default Appointment;